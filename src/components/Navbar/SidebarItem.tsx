import React from "react";
import { SidebarItemType } from "../../redux/store";
import s from "./Navbar.module.css";

const SidebarItem: React.FC<SidebarItemType> = (props) => {
   return (<div className={s.sidebar}>
      {<img src="https://i.pinimg.com/474x/0a/42/7f/0a427f8c57082a1d1f0da6538acabf32--funny-animal-faces-hilarious-animals.jpg" alt="" />}<a>{props.name}</a>
   </div>);
}

export default SidebarItem;