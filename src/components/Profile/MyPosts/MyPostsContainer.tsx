import React, { ChangeEvent } from "react";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import { addPostActionCreator, updateNewTextActionCreator } from "../../../redux/old-redux";



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