import React from "react";
import { NavLink } from "react-router-dom";
import { state } from "../../redux/state";
import s from "./Navbar.module.css";
import Sidebar from "./Sidebar";




const Navbar: React.FunctionComponent = (props: any, activeClassName: string) => {
   return (
      <nav className={s.nav}>
         <div className={s.item}><NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink></div>
         <div className={s.item}><NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink></div>
         <div className={s.item}><NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>News</NavLink></div>
         <div className={s.item}><NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink></div>
         <div className={s.item}><NavLink to="/setting" className={navData => navData.isActive ? s.active : s.item}>Setting</NavLink></div>
         <div className={s.item_friends}>Friends<Sidebar sidebar={state.sidebar} /></div>
      </nav>
   );
}

export default Navbar;