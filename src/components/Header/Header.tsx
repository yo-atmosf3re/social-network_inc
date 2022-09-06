import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

type HeaderPropsType = {
   setAuthUserData: (userId: null, email: null, login: null) => void
}

const Header = (props: HeaderPropsType) => {
   return <header className={s.header}>
      <img src='https://svn.apache.org/repos/asf/openoffice/ooo-site/trunk/content/images/aoo-logo-100x100.png' />

      <div className={s.loginBlock}>
         <NavLink to={'/login'}>
            Login
         </NavLink>
      </div>
   </header>;
}

export default Header;