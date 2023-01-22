import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/redux-store';
import { LoginForm } from './LoginForm';

export const Login = () => {
   const navigate = useNavigate()
   const { login } = useAppSelector(state => state.auth)

   useEffect(() => {
      login && navigate('/profile')
   }, [login])

   return (<div>
      <h1>LOGIN</h1>
      <h3>Welcome, login and password are required for further access.</h3>
      <h5>If, when testing authorization, an error message appears stating that "Incorrect anti-bot symbols", then you should go to the "Social Network" website, log in to your account and log out of it in order to reset the captcha that prevents you from entering account.</h5>
      <LoginForm />
   </div>);
}