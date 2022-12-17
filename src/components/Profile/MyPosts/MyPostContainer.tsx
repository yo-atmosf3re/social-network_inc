import React, { ChangeEvent } from "react";
import { addPostActionCreator, updateNewTextActionCreator } from "../../../redux/profilePage-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";
import { PostType } from "../../../redux/store";
import { MyPosts } from "./MyPosts";

export type MyPostPropsType = MapDispatchToPropsType & initialStateType

type MapDispatchToPropsType = {
   addPost: () => void
   updateNewPostText: (text: string) => void
}

export type initialStateType = {
   newPostText: string
   posts: Array<PostType>
   profile?: any
}

const mapStateToProps = (state: AppStateType): initialStateType => ({
   posts: state.profilePage.posts,
   newPostText: state.profilePage.newPostText,
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      addPost: () => {
         dispatch(addPostActionCreator())
      },
      updateNewPostText: (text: string) => {
         const action = updateNewTextActionCreator(text)
         dispatch(action)
      }
   }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);