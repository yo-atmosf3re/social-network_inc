import { ActionsTypes, MessageType, RootStateType } from "./state";

export const dialogsPageReducer = (state: any, action: ActionsTypes) => {
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


export default dialogsPageReducer;