import React from "react";
import { MessageType } from "../../../redux/store";
import s from './../Dialogs.module.css'
import defaultAvatar from '../../../assets/image/defaultAvatar.png'

export const Message: React.FC<MessageType> = ({
   message
}) => {
   return (
      <div className={s.message}>
         {message}
         {<img src={defaultAvatar} alt="" />}
      </div>
   )
}


export default Message;