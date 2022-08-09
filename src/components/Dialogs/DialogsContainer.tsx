import React from "react";
import { addNewMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsPage-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

export const DialogsContainer = () => {


   return <StoreContext.Consumer>{
      (store) => {
         let state = store.getState().dialogsPage;
         let addNewMessage = () => {
            store.dispatch(addNewMessageActionCreator())
         }
         let onNewMessageChange = (text: string) => {
            store.dispatch(updateNewMessageBodyActionCreator(text))
         }
         return < Dialogs store={store} addNewMessage={addNewMessage} onNewMessageChange={onNewMessageChange} dialogsPage={state} />
      }}
   </StoreContext.Consumer>
}

export default DialogsContainer;