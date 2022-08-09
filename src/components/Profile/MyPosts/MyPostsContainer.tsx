import React, { ChangeEvent } from "react";
import { MyPostsContainerPropsType } from "../../../redux/store";
import { addPostActionCreator, updateNewTextActionCreator } from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props: MyPostsContainerPropsType) => {
   let state = props.store.getState();
   const addNewPost = () => {
      // props.addPost()
      props.store.dispatch(addPostActionCreator())
   }
   const newTextChangeHandler = (text: string) => {
      // props.updateNewPostText(text)
      let action = updateNewTextActionCreator(text)
      props.store.dispatch(action)

   }

   return (<MyPosts updateNewPostText={newTextChangeHandler} addPost={addNewPost} newPostText={state.profilePage.newPostText} posts={state.profilePage.posts} />);
}
export default MyPostsContainer;