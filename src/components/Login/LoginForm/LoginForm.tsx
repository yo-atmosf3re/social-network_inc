import React from 'react'
import { InjectedFormProps, Field } from 'redux-form';
import { FormDataType } from './LoginForm.types';

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field
               name={'login'}
               placeholder={'Login'}
               component={'input'} />
         </div>
         <div>
            <Field
               name={'password'}
               placeholder={'Password'}
               component={'input'} />
         </div>
         <div>
            <Field
               name={'rememberMe'}
               ype={'checkbox'}
               component={'input'} />
            remember me
         </div>
         <div>
            <button>
               Login
            </button>
         </div>
      </form>);
}