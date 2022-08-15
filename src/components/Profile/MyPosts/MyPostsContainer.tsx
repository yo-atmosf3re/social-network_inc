import React, { ChangeEvent } from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator, initialStateType, updateNewTextActionCreator } from "../../../redux/profilePage-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";

export type MyPostPropsType = MapDispatchToPropsType & initialStateType

type MapDispatchToPropsType = {
   addPost: () => void
   updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppStateType): initialStateType => ({ posts: state.profilePage.posts, newPostText: state.profilePage.newPostText, })
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      addPost: () => {
         dispatch(addPostActionCreator())
      },
      updateNewPostText: (text: string) => {
         let action = updateNewTextActionCreator(text)
         dispatch(action)
      }
   }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostContainer;