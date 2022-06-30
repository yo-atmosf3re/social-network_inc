import React from "react";
import { DialogItemType, DialogsLocalStateType, MessageType } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";

export const Dialogs = (props: DialogsLocalStateType) => {
   let dialogsElements = props.state.dialogData
      .map((d: DialogItemType) => <DialogItem name={d.name} id={d.id} />)

   let messagesElements = props.state.messages
      .map((m: MessageType) => <Message message={m.message} id={m.id} />)

   let newMessage = React.createRef<HTMLTextAreaElement>()
   let addText = () => {
      let newText = newMessage.current?.value
      alert(newText)
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
            {<textarea ref={newMessage} className={s.textarea}></textarea>}
            {<button onClick={addText}>Send</button>}
         </div>
      </div >
   )
}

export default Dialogs;