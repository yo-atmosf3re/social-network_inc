import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionsTypes } from "./old-redux";
import { PostType } from "./store";

export interface ProfileState {
   newPostText: string
   posts: Array<PostType>
}

const initialState = {
   newPostText: '',
   posts: [
      { id: 1, message: 'Hi, how are you?', likecount: '♥ 20' },
      { id: 2, message: "It's my first post", likecount: '♥ 14' },
      { id: 3, message: "It's my second post", likecount: '♥ 0' },
   ],
} as ProfileState

export const profilePageReducer = (state = initialState, action: ActionsTypes) => {
   const ADD_POST = 'ADD-POST'
   const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

   switch (action.type) {
      case ADD_POST:
         const newPost: PostType = {
            id: new Date().getTime(),
            message: state.newPostText,
            likecount: '0',
         };
         state.posts.push(newPost);
         state.newPostText = '';
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state
      default:
         return state;
   }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST', } as const);
export const updateNewTextActionCreator = (newText: string) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: newText, } as const);
