import React from 'react'
import { reduxForm } from 'redux-form';
import { LoginForm } from './LoginForm';
import { FormDataType } from './LoginForm/LoginForm.types';


export const Login = () => {
   const onSubmit = (formData: FormDataType) => console.log(formData)
   return (<div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
   </div>);
}

const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm)