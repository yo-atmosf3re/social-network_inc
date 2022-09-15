
import { AppActionsTypes } from "./redux-store";
import { DialogPageType, MessageType } from "./store";

export type DialogsState = typeof initialState;

const initialState = {
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

export type initialStateType = {
   dialogsPage: DialogPageType
   isAuth: boolean
}

export const dialogsPageReducer = (state: DialogsState = initialState, action: AppActionsTypes): DialogsState => {
   const SEND_MASSAGE = 'SEND-MESSAGE'
   const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

   switch (action.type) {
      case SEND_MASSAGE:
         const newAddMessage: MessageType = {
            id: new Date().getTime(),
            message: state.newMessageBody,
         };
         return {
            ...state,
            messages: [...state.messages, newAddMessage],
            newMessageBody: ''
         };
      case UPDATE_NEW_MESSAGE_BODY:
         return {
            ...state,
            newMessageBody: action.body
         };

      default:
         return state;
   }
}

export const addNewMessageActionCreator = () => ({ type: 'SEND-MESSAGE', } as const);
export const updateNewMessageBodyActionCreator = (body: string) => ({ type: 'UPDATE-NEW-MESSAGE-BODY', body: body, } as const);