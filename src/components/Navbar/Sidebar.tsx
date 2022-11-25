import React from "react";
import { SidebarItemType, SidebarType } from "../../redux/store";
import s from "./Navbar.module.css";
import SidebarItem from "./SidebarItem";

const Sidebar: React.FC<SidebarType> = ({
   sidebar
}) => {
   const sidebarItems = sidebar.map((s: SidebarItemType) =>
      <SidebarItem
         id={s.id}
         name={s.name}
         key={s.id}
      />)

   return (
      <div className={s.sidebar_wrapper}>
         <div className={s.sidebar_item}>{sidebarItems}</div>
      </div>);
}

export default Sidebar;