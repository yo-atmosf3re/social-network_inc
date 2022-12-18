import React from "react";
import {
   addPostActionCreator,
   updateNewTextActionCreator
} from "../../../redux/profilePage-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";
import { MyPosts } from "./MyPosts";
import { initialStateType, MapDispatchToPropsType } from "./MyPost.types";

const mapStateToProps = (state: AppStateType): initialStateType => ({
   posts: state.profilePage.posts,
   newPostText: state.profilePage.newPostText,
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      addPost: () => dispatch(addPostActionCreator()),
      updateNewPostText: (text: string) => dispatch(updateNewTextActionCreator(text))
   }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);