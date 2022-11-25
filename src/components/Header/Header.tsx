import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import logo from '../../assets/image/logo.png'

type HeaderPropsType = {
   isAuth: boolean
   login: string | null
   // setAuthUserDataSuccess: (userId: null, email: null, login: null) => void
   // getAuthUserData: () => void
}

const Header: React.FC<HeaderPropsType> = ({
   isAuth, login
}) => {
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