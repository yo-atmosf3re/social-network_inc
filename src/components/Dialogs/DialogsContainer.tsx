import React, { ChangeEvent } from "react";
import { addNewMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsPage-reducer";
import { DialogItemType, DialogsContainerType, MessageType } from "../../redux/store";
import StoreContext from "../../StoreContext";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import Message from "./Message/Message";

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