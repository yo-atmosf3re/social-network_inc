import { ActionsTypes, MessageType, RootStateType } from "./state";

export const dialogsPageReducer = (state: RootStateType, action: ActionsTypes) => {
   if (action.type === 'SEND-MESSAGE') {
      const newAddMessage: MessageType = {
         id: new Date().getTime(),
         message: state.dialogsPage.newMessageBody,
      };
      state.dialogsPage.messages.push(newAddMessage)
      state.dialogsPage.newMessageBody = '';
   } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
      state.dialogsPage.newMessageBody = action.body;
   }
   return state;
}

export default dialogsPageReducer;