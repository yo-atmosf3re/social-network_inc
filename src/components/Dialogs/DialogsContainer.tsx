import React, { ChangeEvent } from "react";
import { addNewMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsPage-reducer";
import { DialogItemType, DialogsContainerType, MessageType } from "../../redux/store";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import Message from "./Message/Message";

export const DialogsContainer = (props: DialogsContainerType) => {
   let state = props.store.getState().dialogsPage;
   let addNewMessage = () => {
      props.store.dispatch(addNewMessageActionCreator())
   }
   let onNewMessageChange = (text: string) => {
      props.store.dispatch(updateNewMessageBodyActionCreator(text))
   }

   return <Dialogs store={props.store} addNewMessage={addNewMessage} onNewMessageChange={onNewMessageChange} dialogsPage={state} />
}

export default DialogsContainer;