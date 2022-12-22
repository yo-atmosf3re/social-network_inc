import { useFormik } from 'formik';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup'
import { login } from '../../../redux/auth-reducer';
import { AppDispatch } from '../../../redux/redux-store';
import s from './LoginForm.module.css'

const validationSchema = Yup.object({
   login: Yup.string().max(30, 'Must be 30 characters or less').required('Login is required'),
   password: Yup.string().max(16, 'Must be 16 characters or less').required('Password is required')
})


export const LoginForm = () => {

   const dispatch = useDispatch<AppDispatch>()

   const { handleSubmit, values, touched, errors, handleChange, handleBlur } = useFormik({
      initialValues: {
         login: '',
         password: '',
         rememberMe: false,
      },
      onSubmit: (values) => {
         dispatch(login(values.login, values.password, values.rememberMe))
      },
      validationSchema
   })

   const loginItemsForm = [
      { id: 1, name: 'login', placeholder: 'Login', type: 'text', errors: errors.login, touched: touched.login },
      { id: 2, name: 'password', placeholder: 'Password', type: 'password', errors: errors.password, touched: touched.password },
   ]
   return (
      <form
         className={s.formWrapper}
         onSubmit={handleSubmit}>
         <div className={s.formInputs}>
            <div className={s.dataAuthForm}>
               {
                  loginItemsForm.map(g =>
                     <Fragment key={g.id}>
                        <input
                           onBlur={handleBlur}
                           onChange={handleChange}
                           id={g.name}
                           name={g.name}
                           placeholder={g.placeholder}
                           type={g.type}
                        />
                        <span className={s.errorsText}>
                           {
                              g.touched && g.errors
                           }
                        </span>
                        <br />
                     </Fragment>
                  )
               }
            </div>
            <div className={s.checkboxForm}>
               <input
                  onChange={handleChange}
                  name={'rememberMe'}
                  id={'rememberMe'}
                  type={'checkbox'}
               />
               <span>
                  Remember me?
               </span>
            </div>
         </div>
         <div>
            <button type='submit'>
               Login
            </button>
         </div>
      </form >);
}