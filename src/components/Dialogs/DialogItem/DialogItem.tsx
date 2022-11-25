import React from "react";
import { NavLink } from "react-router-dom";
import { DialogItemType } from "../../../redux/store";
import s from './../Dialogs.module.css'
import defaultAvatar from '../../../assets/image/defaultAvatar.png'

const StyleCondition = s.dialog + ' ' + s.active;


export const DialogItem: React.FC<DialogItemType> = ({
   id, name
}) => {
   return (
      <div className={StyleCondition}>
         <NavLink
            to={'/dialogs/' + id}>
            {
               <img src={defaultAvatar} alt="" />
            }
            {name}
         </NavLink>
      </div>
   )
}


export default DialogItem;