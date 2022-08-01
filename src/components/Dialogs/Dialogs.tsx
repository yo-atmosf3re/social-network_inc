import React, { ChangeEvent } from "react";
import { addNewMessageActionCreator, DialogItemType, DialogsLocalStateType, MessageType, updateNewMessageTextActionCreator } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";

export const Dialogs = (props: DialogsLocalStateType) => {
   let dialogsElements = props.state.dialogData
      .map((d: DialogItemType) => <DialogItem name={d.name} id={d.id} />)

   let messagesElements = props.state.messages.map((m: MessageType) => <Message message={m.message} id={m.id} />)

   let addNewMessage = () => {
      props.dispatch(addNewMessageActionCreator())
   }

   let newAddMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      let text = e.currentTarget.value;
      let action = updateNewMessageTextActionCreator(text)
      props.dispatch(action)
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
            {<textarea value={props.newMessageText} onChange={newAddMessageHandler} className={s.textarea}></textarea>}
            {<button onClick={addNewMessage}>Send</button>}
         </div>
      </div >
   )
}

export default Dialogs;