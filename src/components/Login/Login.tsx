import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
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
      <LoginForm />
   </div>);
}