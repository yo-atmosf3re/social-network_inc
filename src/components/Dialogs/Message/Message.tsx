import React from "react";
import { MessageType } from "../../../redux/store";
import s from './../Dialogs.module.css'

export const Message = (props: MessageType) => {
   return (
      <div className={s.message}>{props.message}{<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZYSxc3XHXqhhaUedCBWKj9VX8s1K0_4hhrL_xaSJ06iaKEvyUWdQIK6BaIaTZjIxm-c&usqp=CAU" alt="" />}</div>
   )
}


export default Message;