import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import logo from '../../assets/image/logo.png'
import { HeaderPropsType } from "./Header.types";



export const Header: React.FC<HeaderPropsType> = ({
   // isAuth,
   login
}) => {
   const isAuth = false
   return <header
      className={s.header}>
      <img src={logo} />
      <div className={s.loginBlock}>
         {
            isAuth
               ?
               `Welcome, ${login}`
               :
               <NavLink to={'/login'}>
                  Login
               </NavLink>
         }
      </div>
   </header>;
}

export default Header;