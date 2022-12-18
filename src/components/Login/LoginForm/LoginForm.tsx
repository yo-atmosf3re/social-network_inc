import { useFormik } from 'formik';
import * as Yup from 'yup'
import s from './LoginForm.module.css'

export const LoginForm = () => {

   const validationSchema = Yup.object({
      login: Yup.string().max(12, 'Must be 11 characters or less').required('Login is required'),
      password: Yup.string().max(16, 'Must be 16 characters or less').required('Password is required')
   })

   const { handleSubmit, values, errors, handleChange } = useFormik({
      initialValues: {
         login: '',
         password: '',
         rememberMe: false,
      },
      onSubmit: (values) => {
         console.log(values)
      },
      validationSchema
   })

   const loginItemsForm = [
      { id: 1, name: 'login', placeholder: 'Login', type: 'text', errors: errors.login },
      { id: 2, name: 'password', placeholder: 'Password', type: 'password', errors: errors.password },
      { id: 3, name: 'rememberMe', placeholder: '', type: 'checkbox', errors: 'Remember you?' },
   ]

   return (
      <form
         className={s.formWrapper}
         onSubmit={handleSubmit}>
         {
            loginItemsForm.map(g =>
               <div key={g.id}>
                  <input
                     onChange={handleChange}
                     id={g.name}
                     name={g.name}
                     placeholder={g.placeholder}
                     type={g.type}
                  />
                  <span >
                     {
                        g.errors ? g.errors : null
                     }
                  </span>
               </div>)
         }
         <div>
            <button type='submit'>
               Login
            </button>
         </div>
      </form>);
}