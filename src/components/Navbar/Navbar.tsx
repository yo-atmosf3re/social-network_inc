import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/redux-store";
import { NavbarPropsType } from "../../redux/store";
import s from "./Navbar.module.css";
import { Sidebar } from "./Sidebar";

const NAVBAR_CATEGORIES = [
   { title: 'Profile', url: '/profile', id: 0 },
   { title: 'Messages', url: '/dialogs', id: 1 },
   { title: 'Users', url: '/users', id: 2 },
   { title: 'News', url: '/news', id: 3 },
   { title: 'Music', url: '/music', id: 4 },
   { title: 'Settings', url: '/settings', id: 5 },
]

export const Navbar = () => {
   const { isAuth } = useAppSelector(state => state.auth)
   console.log(isAuth)
   const navbarItems = NAVBAR_CATEGORIES.map((n) => <div
      key={n.id}
      className={s.item}>
      <NavLink
         to={n.url}
         className={d => d.isActive ? s.active : s.item}
      >
         {
            n.title
         }
      </NavLink>
   </div>)
   return (
      <nav className={s.nav}>
         {
            navbarItems
         }
         <div className={s.item_friends}>
            Friends
            {
               isAuth &&
               <Sidebar />
            }
         </div>
      </nav>
   );
}