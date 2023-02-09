import React from "react";
import { SidebarItemType, SidebarType } from "../../../redux/store";
import s from "./../Navbar.module.css";
import defaultAvatar from '../../../assets/image/defaultAvatar.png'

const SIDEBAR_ITEMS = [
   { id: 1, name: 'Alex' },
   { id: 2, name: 'Steve' },
   { id: 3, name: 'Jon' },
   { id: 4, name: 'Oleg' },
]

export const Sidebar = () => {
   const sidebarItems = SIDEBAR_ITEMS.map((f: SidebarItemType) =>
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
      </div>
   );
}