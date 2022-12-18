import { useFormik } from 'formik'
import React from 'react'
import { PostTextFieldPropsType } from './PostTextareaField.types'
import * as Yup from 'yup'
import s from './PostTextareaField.module.css'

const ERROR_STYLE = { color: 'red' }
const BORDER_ERROR_STYLE = { border: '2px solid red' }

export const PostTextareaField: React.FC<PostTextFieldPropsType> = ({
   newTextChangeHandler,
   clearTextarea,
   newPostText, onAddPost
}) => {

   const validationSchema = Yup.object({
      message: Yup.string()
         .max(41, "Must be 42 characters or less, press 'Remove' for clear the field")
   })

   const { handleSubmit, handleChange, handleReset, values, errors } = useFormik({
      initialValues: {
         message: newPostText
      },
      onSubmit: (values) => {
         newTextChangeHandler(values.message)
         onAddPost()
         values.message = ''
      },
      onReset: (values) => {
         clearTextarea()
         values.message = ''
      },
      validationSchema
   })

   const isDisabledClearButton = values.message === ''
   const submitButtonCondition = values.message === '' || !!errors.message

   const isErrorSpan = errors.message ? ERROR_STYLE : undefined
   const isErrorTextarea = errors.message ? BORDER_ERROR_STYLE : undefined

   return (
      <form onSubmit={handleSubmit}>
         <span
            style={isErrorSpan}>
            My post
         </span>
         <div className={s.formWrapper}>
            <textarea
               style={isErrorTextarea}
               disabled={!!errors.message}
               placeholder='Type message'
               className={s.textarea}
               id='message'
               name='message'
               value={values.message}
               onChange={handleChange}
            />
            <br />
            <div style={ERROR_STYLE}>
               {
                  errors.message ? errors.message : null
               }
            </div>
         </div>
         <br />
         <button
            disabled={submitButtonCondition}
            type='submit'
         >
            Add post
         </button>
         <button
            disabled={isDisabledClearButton}
            onClick={handleReset}
         >
            Remove
         </button>
      </form>
   )
}
