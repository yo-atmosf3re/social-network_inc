import React from "react";
import { SidebarItemType } from "../../redux/store";
import s from "./Navbar.module.css";
import defaultAvatar from '../../assets/image/defaultAvatar.png'

const SidebarItem: React.FC<SidebarItemType> = (props) => {
   return (<div className={s.sidebar}>
      {<img src={defaultAvatar} alt="" />}<a>{props.name}</a>
   </div>);
}

export default SidebarItem;