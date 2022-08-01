import { ActionsTypes, PostType, ProfilePageType, RootStateType, StoreType } from "./state";

export type ProfilePageReducerType = {
   newPostText: string
   posts: PostType[]
   profilePage: number
}

type initialStateType = {
   newPostText: string
   posts: PostType[]
   profilePage: number
}

let initialState = {

}

// ДОСМОТРЕТЬ ЛЕКЦИЮ ПО ТИПИЗАЦИИ

const profilePageReducer = (state = initialState, action: ActionsTypes) => {
   if (action.type === 'ADD-POST') {
      const newPost: PostType = {
         id: new Date().getTime(),
         message: state.profilePage.newPostText,
         likecount: '0',
      };
      state.profilePage.posts.push(newPost);
      state.profilePage.newPostText = '';
   } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      state.profilePage.newPostText = action.newText;
   }
   return state;
}

export default profilePageReducer;