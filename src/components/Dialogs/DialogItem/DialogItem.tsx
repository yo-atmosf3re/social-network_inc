import React from "react";
import { NavLink } from "react-router-dom";
import { idText } from "typescript";
import s from './../Dialogs.module.css'

export type DialogItemType = {
   name: string,
   id: string
}

export const DialogItem = (props: DialogItemType) => {
   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
      </div>
   )
}


export default DialogItem;