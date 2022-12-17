import React from "react";
import { SidebarItemType, SidebarType } from "../../../redux/store";
import s from "./../Navbar.module.css";
import defaultAvatar from '../../../assets/image/defaultAvatar.png'

export const Sidebar: React.FC<SidebarType> = ({
   sidebar
}) => {

   const sidebarItems = sidebar.map((f: SidebarItemType) =>
      <div
         key={f.id}
         className={s.sidebar}>
         <img src={defaultAvatar} alt="avatar" />
         <a>
            {f.name}
         </a>
      </div>
   )

   return (
      <div className={s.sidebar_wrapper}>
         <div className={s.sidebar_item}>
            {sidebarItems}
         </div>
      </div>);
}