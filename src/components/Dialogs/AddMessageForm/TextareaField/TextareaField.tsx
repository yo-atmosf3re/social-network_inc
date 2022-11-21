import React from 'react'
import { AddMessageTextareaPropsType } from '../AddMessageForm'
import s from './TextareaField.module.css'

const TextareaField: React.FC<AddMessageTextareaPropsType> = ({
   messagesElements, newMessageBody, onNewMessageChange
}) => {
   return (
      <div className={s.messages}>
         {messagesElements}
         <textarea
            placeholder="Enter your message"
            value={newMessageBody}
            onChange={onNewMessageChange}
            className={s.textarea} >
         </textarea >
      </div>
   )
}

export default TextareaField
