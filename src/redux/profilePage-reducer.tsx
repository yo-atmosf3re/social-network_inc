import { ActionsTypes } from "./old-redux";
import { PostType, ProfilePageType } from "./store";

export type ProfileStateType = typeof initialState

const initialState = {
   newPostText: '',
   posts: [
      { id: 1, message: 'Hi, how are you?', likecount: '♥ 20' },
      { id: 2, message: "It's my first post", likecount: '♥ 14' },
      { id: 3, message: "It's my second post", likecount: '♥ 0' },
   ],
}

export type initialStateType = {
   newPostText: string
   posts: Array<PostType>
}

export const profilePageReducer = (state: ProfileStateType = initialState, action: ActionsTypes): ProfileStateType => {
   const ADD_POST = 'ADD-POST'
   const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


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


      default:
         return state;
   }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST', } as const);
export const updateNewTextActionCreator = (newText: string) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: newText, } as const);
