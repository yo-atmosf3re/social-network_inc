import { profileAPI } from './../api/Api';
import { usersAPI } from "../api/Api";
import { AppActionsTypes, AppThunkType } from "./redux-store";
import { PostType } from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

export type ProfileStateType = typeof initialState

const initialState = {
   newPostText: '',
   posts: [
      { id: 1, message: 'Hi, how are you?', likecount: `♥ ${Math.floor(Math.random() * 98).toString()}` },
      { id: 2, message: "It's my first post", likecount: `♥ ${Math.floor(Math.random() * 98).toString()}` },
      { id: 3, message: "It's my second post", likecount: `♥ ${Math.floor(Math.random() * 98).toString()}` },
   ],
   profile: null,
   status: '',
}

export const profilePageReducer = (state: ProfileStateType = initialState, action: AppActionsTypes): ProfileStateType => {
   switch (action.type) {
      case ADD_POST:
         const newPost: PostType = {
            id: new Date().getTime(),
            message: state.newPostText,
            likecount: `♥ ${Math.floor(Math.random() * 98).toString()}`,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
         }
      case DELETE_POST: {
         return {
            ...state,
            posts: [...state.posts.filter(f => f.id !== action.id)]
         }
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

export const addPostAC = () => ({ type: ADD_POST } as const);

export const deletePostAC = (id: number) => ({ type: DELETE_POST, id } as const)

export const updateNewTextAC = (newText: string) => ({ type: UPDATE_NEW_POST_TEXT, newText } as const);

export const setUserProfileAC = (profile: null) => ({ type: SET_USER_PROFILE, profile } as const)

export const setStatusAC = (status: string) => ({ type: SET_STATUS, status } as const)

export const setUserProfileTC = (userId: number): AppThunkType => async (dispatch) => {
   try {
      const { data } = await usersAPI.getProfile(userId)
      dispatch(setUserProfileAC(data))
   } catch (error) {
      console.log(error)
   }
}

export const getStatusTC = (userId: number): AppThunkType => async (dispatch) => {
   try {
      const { data } = await profileAPI.getStatus(userId)
      dispatch(setStatusAC(data))
   } catch (error) {
      console.log(error)
   }
}

export const updateStatusTC = (status: string): AppThunkType => async (dispatch) => {
   try {
      const { data } = await profileAPI.updateStatus(status)
      if (data.resultCode === 0) dispatch(setStatusAC(status))
   } catch (error) {
      console.log(error)
   }
}
