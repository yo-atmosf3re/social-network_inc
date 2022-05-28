import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = () => {
   let dialogData = [
      { id: "1", name: 'Alex' },
      { id: "2", name: 'Ivan' },
      { id: "3", name: 'Jon' },
      { id: "4", name: 'Andrey' },
      { id: "5", name: 'Mark' },
      { id: "6", name: 'Elvis' },
   ]

   let messages = [
      { id: '1', message: "Hi!" },
      { id: '2', message: "How are you?" },
      { id: '3', message: "Yo!" },
      { id: '4', message: "Salam!" },
      { id: '5', message: "Hello!!" },
   ]

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