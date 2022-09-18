import { profileAPI } from './../api/Api';
import { usersAPI } from "../api/Api";
import { AppActionsTypes, AppThunkType } from "./redux-store";
import { PostType } from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

export type ProfileStateType = typeof initialState

const initialState = {
   newPostText: '',
   posts: [
      { id: 1, message: 'Hi, how are you?', likecount: '♥ 20' },
      { id: 2, message: "It's my first post", likecount: '♥ 14' },
      { id: 3, message: "It's my second post", likecount: '♥ 0' },
   ],
   profile: null,
   status: '',
}

export type initialStateType = {
   newPostText: string
   posts: Array<PostType>
   profile?: any
}

export const profilePageReducer = (state: ProfileStateType = initialState, action: AppActionsTypes): ProfileStateType => {
   switch (action.type) {
      case ADD_POST:
         const newPost: PostType = {
            id: new Date().getTime(),
            message: state.newPostText,
            likecount: '0',
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
         }
      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText,
         }
      case SET_STATUS:
         return {
            ...state,
            status: action.status,
         }
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile
         }
      }
      default:
         return state;
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST, } as const);
export const updateNewTextActionCreator = (newText: string) => ({ type: UPDATE_NEW_POST_TEXT, newText, } as const);
export const setUserProfile = (profile: null) => ({ type: SET_USER_PROFILE, profile } as const)
export const setStatus = (status: string) => ({ type: SET_STATUS, status } as const)

export const setUserProfileTC = (userId: number): AppThunkType => {
   return (dispatch) => {
      usersAPI.getCurrentUsers(userId)
         .then((data) => {
            dispatch(setUserProfile(data.data))
         });
   }
}
export const getStatus = (userId: number): AppThunkType => {
   return (dispatch) => {
      profileAPI.getStatus(userId)
         .then((data) => {
            dispatch(setStatus(data.data))
         });
   }
}
export const updateStatus = (status: string): AppThunkType => {
   return (dispatch) => {
      profileAPI.updateStatus(status)
         .then((response) => {
            if (response.data.resultCode === 0) {
               dispatch(setStatus(status))
            }
         });
   }
}