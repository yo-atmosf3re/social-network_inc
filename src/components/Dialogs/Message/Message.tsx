import React from "react";
import { MessageType } from "../../../redux/state";
import s from './../Dialogs.module.css'

export const Message = (props: MessageType) => {
   return (
      <div className={s.message}>{props.message}</div>
   )
}


export default Message;