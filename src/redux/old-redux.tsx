import { DialogType, MessageType, PostType } from "./store";
import { follow, unfollow } from "./users-reducer";

type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewTextActionCreator> | ReturnType<typeof addNewMessageActionCreator> | ReturnType<typeof updateNewMessageBodyActionCreator> | ReturnType<typeof follow> | ReturnType<typeof unfollow>

type InitialStateProfileType = {
   newPostText: string
   posts: Array<PostType>
}
type initialStateDialogsType = {
   newMessageBody: string
   dialogData: Array<DialogType>
   messages: Array<MessageType>
}

const initialStateProfile: InitialStateProfileType = {
   newPostText: '',
   posts: [
      { id: 1, message: 'Hi, how are you?', likecount: '♥ 20' },
      { id: 2, message: "It's my first post", likecount: '♥ 14' },
      { id: 3, message: "It's my second post", likecount: '♥ 0' },
   ],
}

export const profilePageReducerOld = (state = initialStateProfile, action: ActionsTypes): InitialStateProfileType => {
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

const initialStateDialogs: initialStateDialogsType = {
   newMessageBody: '',
   messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yo!" },
      { id: 4, message: "Salam!" },
      { id: 5, message: "Hello!!" },
   ],
   dialogData: [
      { id: "1", name: 'Alex' },
      { id: "2", name: 'Ivan' },
      { id: "3", name: 'Jon' },
      { id: "4", name: 'Andrey' },
      { id: "5", name: 'Mark' },
      { id: "6", name: 'Elvis' },
   ],
}
export const dialogsPageReducerOld = (state = initialStateDialogs, action: ActionsTypes): initialStateDialogsType => {
   const SEND_MASSAGE = 'SEND-MESSAGE'
   const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

   switch (action.type) {
      case SEND_MASSAGE:
         const newAddMessage: MessageType = {
            id: new Date().getTime(),
            message: state.newMessageBody,
         };
         state.messages.push(newAddMessage)
         state.newMessageBody = '';
         return state;
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.body;
         return state;
      default:
         return state;
   }
}
export const addNewMessageActionCreator = () => ({ type: 'SEND-MESSAGE', } as const);
export const updateNewMessageBodyActionCreator = (body: string) => ({ type: 'UPDATE-NEW-MESSAGE-BODY', body: body, } as const);