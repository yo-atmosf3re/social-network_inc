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


// ** Нужно добавить и протестировать валидацию, которую я закомментировал ниже для имейла.
// if (!values.email) {
      //          errors.email = 'Поле обязательно для заполнения';
       //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //        errors.email = 'Email указан некорректно';
         // }
         //   if (!values.password) {
       //         errors.password = 'Поле обязательно для заполнения';
     //       } else if (values.password.length < 5) {
   //             errors.password = 'Пароль должен содержать не меньше 8 символов'
 //          }
//            return errors;

export const LoginForm = () => {
   const dispatch = useDispatch<AppDispatch>()

   const { handleSubmit, touched, errors,
      handleChange, handleBlur, isValid,
      dirty, values } = useFormik({
         initialValues: {
            login: '',
            password: '',
            rememberMe: false,
            errorMessage: ''
         },
         onSubmit: (values, { setFieldValue }) => {
            dispatch(login(values.login, values.password, values.rememberMe, setFieldValue))
         },
         validationSchema,
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
            <button
               className={s.button}
               disabled={!(dirty && isValid)}
               type='submit'>
               Login
            </button>
         </div>
         {
            values.errorMessage
            &&
            <div className={s.someError}>
               {
                  values.errorMessage
               }
            </div>
         }
      </form >);
}
