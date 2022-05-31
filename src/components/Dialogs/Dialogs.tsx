import React from "react";
import { DialogPageType, DialogType, MessageType, RootStatePropsType, RootStateType } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs: React.FC<DialogPageType> = (props) => {
   let dialogsElements = props.state.messages
      .map(d => <DialogItem name={d.name} id={d.id} />)

   let messagesElements = props.state.dialogData
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