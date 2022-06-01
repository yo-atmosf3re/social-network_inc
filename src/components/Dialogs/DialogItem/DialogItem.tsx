import React from "react";
import { NavLink } from "react-router-dom";
import { DialogItemType } from "../../../redux/state";
import s from './../Dialogs.module.css'


export const DialogItem = (props: DialogItemType) => {
   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
      </div>
   )
}


export default DialogItem;