import React, { ChangeEvent } from "react";
import { DialogItemType, MessageType } from "../../redux/store";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import { DialogsPropsType } from "./DialogsContainer";
import Message from "./Message/Message";

export const Dialogs = (props: DialogsPropsType) => {
   let state = props.dialogsPage;
   let dialogsElements = state.dialogData
      .map((d: DialogItemType) => <DialogItem name={d.name} id={d.id} />)
   let messagesElements = state.messages.map((m: MessageType) => <Message message={m.message} id={m.id} />)

   let addNewMessage = () => {
      props.addNewMessage()
   }

   let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      let text = e.currentTarget.value;
      props.onNewMessageChange(text)
   }

   let emptyField = () => {
      return state.newMessageBody === '' ? true : false
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
            {<textarea placeholder="Enter your message" value={state.newMessageBody} onChange={onNewMessageChange} className={s.textarea}></textarea>}
            {<button disabled={emptyField()} onClick={addNewMessage}>Send</button>}
         </div>
      </div >
   )
}

export default Dialogs;