import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import s from './Header.module.css';
import logo from '../../assets/image/logo.png'
import { HeaderPropsType } from "./Header.types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/redux-store";
import { logout } from "../../redux/auth-reducer";



export const Header: React.FC<HeaderPropsType> = ({
   isAuth,
   login
}) => {

   const dispatch = useDispatch<AppDispatch>()
   const navigate = useNavigate()
   const [auth, setAuth] = useState(false)

   const logoutHandler = () => {
      dispatch(logout())
      navigate('/login', { state: 'login' })
      console.log(auth, 'after')
      // setAuth(!!auth)
      console.log(auth, 'before')
   }

   return <header
      className={s.header}>
      <img src={logo} />
      <div className={s.loginBlock}>
         {
            isAuth
               ?
               <>
                  {
                     <>
                        <button
                           onClick={logoutHandler}
                        >
                           Logout
                        </button>
                        <span>
                           Welcome, {login}
                        </span>
                     </>
                  }
               </>
               :
               <NavLink
                  // onClick={() => setAuth(false)}
                  to={'/login'}
               >
                  Login
               </NavLink>
         }
      </div>
   </header>;
}

export default Header;