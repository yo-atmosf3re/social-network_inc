import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/redux-store';
import { LoginPropsType } from './Login.types';
import { LoginForm } from './LoginForm';

export const Login = () => {
   const { isAuth } = useAppSelector(state => state.auth)
   console.log(isAuth)

   if (isAuth) return <Navigate to={'/profile'} />

   return (<div>
      <h1>LOGIN</h1>
      <h3>Welcome, login and password are required for further access.</h3>
      <LoginForm />
   </div>);
}