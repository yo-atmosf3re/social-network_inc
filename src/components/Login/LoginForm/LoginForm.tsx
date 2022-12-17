import React from 'react'
import { InjectedFormProps, Field } from 'redux-form';
import { FormDataType } from './LoginForm.types';

const LOGIN_ITEMS_FORM = [
   { id: 1, name: 'login', placeholder: 'Login', type: '', component: 'input' },
   { id: 2, name: 'password', placeholder: 'Password', type: '', component: 'input' },
   { id: 3, name: 'rememberMe', placeholder: '', type: 'checkbox', component: 'input' },
]

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         {
            LOGIN_ITEMS_FORM.map(g =>
               <div key={g.id}>
                  <Field
                     name={g.name}
                     placeholder={g.placeholder}
                     type={g.type}
                     component={g.component}
                  />
               </div>)
         }
         <div>
            <button>
               Login
            </button>
         </div>
      </form>);
}