import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import s from './Header.module.css';
import logo from '../../assets/image/logo.png'
import { HeaderPropsType } from "./Header.types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/redux-store";
import { logoutTC } from "../../redux/auth-reducer";

export const Header: React.FC<HeaderPropsType> = ({
   login
}) => {

   const dispatch = useDispatch<AppDispatch>()
   const navigate = useNavigate()
   const location = useLocation()

   const logoutHandler = () => {
      dispatch(logoutTC())
      login &&
         navigate('/profile')
   }

   const loginHandler = () => {
      navigate('/login')
   }

   return <header
      className={s.header}>
      <img
         className={s.logoImg}
         src={logo} />
      <div className={s.loginBlock}>
         {
            <>
               {
                  login
                     ?
                     <>
                        <span className={s.titleLogin}>
                           Welcome, {login}
                        </span>
                        <button
                           className={s.button}
                           onClick={logoutHandler}
                        >
                           Logout
                        </button>
                     </>
                     :
                     <button
                        disabled={location.pathname === '/login'}
                        className={s.button}
                        onClick={loginHandler}
                     >
                        Login
                     </button>
               }
            </>
         }
      </div>
   </header>;
}