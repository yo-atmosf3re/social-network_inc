import React from "react";
import { DialogPageType, DialogsLocalStateType, DialogType, MessageType, RootStatePropsType, RootStateType } from "../../redux/state";
import DialogItem, { DialogItemType } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = (props: DialogsLocalStateType) => {
   let dialogsElements = props.state.dialogData
      .map((d: DialogItemType) => <DialogItem name={d.name} id={d.id} />)

   let messagesElements = props.state.messages
      .map((m: MessageType) => <Message message={m.message} id={m.id} />)

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