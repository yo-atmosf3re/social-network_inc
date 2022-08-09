import React, { ChangeEvent } from "react";
import { MyPostsContainerPropsType } from "../../../redux/store";
import { addPostActionCreator, updateNewTextActionCreator } from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";



const MyPostsContainer = () => {
   return (
      <StoreContext.Consumer>{
         (store) => {
            let state = store.getState();
            const addNewPost = () => {
               store.dispatch(addPostActionCreator())
            }
            const newTextChangeHandler = (text: string) => {
               let action = updateNewTextActionCreator(text)
               store.dispatch(action)

            }
            return < MyPosts updateNewPostText={newTextChangeHandler} addPost={addNewPost} newPostText={state.profilePage.newPostText} posts={state.profilePage.posts} />
         }
      }
      </StoreContext.Consumer>);
}
export default MyPostsContainer;