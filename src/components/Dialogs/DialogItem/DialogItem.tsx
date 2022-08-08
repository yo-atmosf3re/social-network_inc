import React from "react";
import { NavLink } from "react-router-dom";
import { DialogItemType } from "../../../redux/store";
import s from './../Dialogs.module.css'


export const DialogItem = (props: DialogItemType) => {
   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={'/dialogs/' + props.id}>{<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZYSxc3XHXqhhaUedCBWKj9VX8s1K0_4hhrL_xaSJ06iaKEvyUWdQIK6BaIaTZjIxm-c&usqp=CAU" alt="" />
         }{props.name}</NavLink>
      </div>
   )
}


export default DialogItem;