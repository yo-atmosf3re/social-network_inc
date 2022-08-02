import { ActionsTypes, PostType } from "./state";

const profilePageReducer = (state: any, action: ActionsTypes) => {
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

export default profilePageReducer;