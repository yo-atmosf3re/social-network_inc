import { ActionsTypes } from "./redux-store";
import { PostType } from "./store";

export type ProfileStateType = typeof initialState

const initialState = {
   newPostText: '',
   posts: [
      { id: 1, message: 'Hi, how are you?', likecount: '♥ 20' },
      { id: 2, message: "It's my first post", likecount: '♥ 14' },
      { id: 3, message: "It's my second post", likecount: '♥ 0' },
   ],
   profile: null
}

export type initialStateType = {
   newPostText: string
   posts: Array<PostType>
   profile?: any
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export const profilePageReducer = (state: ProfileStateType = initialState, action: ActionsTypes): ProfileStateType => {
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