import React from "react";
import {
   addPostAC,
   updateNewTextAC
} from "../../../redux/profilePage-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";
import { MyPosts } from "./MyPosts";
import { initialStateType, MapDispatchToPropsType } from "./MyPost.types";
import { selectNewPostText, selectPosts } from "../../../redux/selectors/my-post-selectors";

const mapStateToProps = (state: AppStateType): initialStateType => ({
   posts: selectPosts(state),
   newPostText: selectNewPostText(state),
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      addPost: () => dispatch(addPostAC()),
      updateNewPostText: (text: string) => dispatch(updateNewTextAC(text))
   }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);