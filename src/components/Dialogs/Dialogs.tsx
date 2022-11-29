import React, { ChangeEvent, useCallback } from "react";
import { DialogItemType, MessageType } from "../../redux/store";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import { DialogsPropsType } from "./DialogsContainer";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

export const Dialogs: React.FC<DialogsPropsType> = ({
   dialogsPage, ...props
}) => {
   const { dialogData, messages, newMessageBody } = dialogsPage;

   const dialogsElements = dialogData
      .map((d: DialogItemType) => <DialogItem key={d.id} name={d.name} id={d.id} />)

   const messagesElements = messages.map((m: MessageType) => <Message message={m.message} id={m.id} key={m.id} />)

   const addNewMessage = useCallback(() => {
      props.addNewMessage()
      props.onNewMessageChange('')
   }, [props.addNewMessage, props.onNewMessageChange])

   const onNewMessageChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => props.onNewMessageChange(e.currentTarget.value), [props.onNewMessageChange])

   const emptyField = useCallback(() => newMessageBody === '' ? true : false, [newMessageBody])

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <AddMessageForm
            addNewMessage={addNewMessage}
            messagesElements={messagesElements}
            onNewMessageChange={onNewMessageChange}
            emptyField={emptyField}
            newMessageBody={dialogsPage.newMessageBody}
         />
      </div >
   )
}

export default Dialogs;