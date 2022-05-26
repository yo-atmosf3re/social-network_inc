import React from "react";
import { NavLink } from "react-router-dom";
import { idText } from "typescript";
import s from './Dialogs.module.css'

type DialogItemType = {
   name: string,
   id: string
}

const DialogItem = (props: DialogItemType) => {
   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
      </div>
   )
}

type MessageType = {
   message: string
   id: string
}

const Message = (props: MessageType) => {
   return (
      <div className={s.message}>{props.message}</div>
   )
}

const Dialogs = () => {
   let dialogData = [
      { id: "1", name: 'Alex' },
      { id: "2", name: 'Ivan' },
      { id: "3", name: 'Jon' },
      { id: "4", name: 'Andrey' },
      { id: "5", name: 'Mark' },
      { id: "6", name: 'Elvis' },
   ]

   let dialogsElements = dialogData
      .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

   let messagesData = [
      { id: '1', message: "Hi!" },
      { id: '2', message: "How are you?" },
      { id: '3', message: "Yo!" },
   ]

   let messagesElements = messagesData
      .map(m => <Message message={m.message} id={m.id} />)

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
         </div>
         <div className={s.dialog}>
            <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
         </div>
         <div className={s.dialog}>
            <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
         </div>
         <div className={s.messages}>
            {/* <Message message={messagesData[0].message} id={messagesData[0].id} />
            <Message message={messagesData[1].message} id={messagesData[1].id} />
            <Message message={messagesData[2].message} id={messagesData[2].id} /> */}
         </div>
      </div >
   )
}

export default Dialogs;