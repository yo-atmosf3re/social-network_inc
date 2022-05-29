import React from "react";
import { dialogData, messages } from "../..";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = () => {
   let dialogsElements = dialogData
      .map(d => <DialogItem name={d.name} id={d.id} />)

   let messagesElements = messages
      .map(m => <Message message={m.message} id={m.id} />)

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div >
   )
}

export default Dialogs;