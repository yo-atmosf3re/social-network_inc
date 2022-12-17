import { useFormik } from 'formik'
import React from 'react'
import { PostTextFieldPropsType } from './PostTextareaField.types'

export const PostTextareaField: React.FC<PostTextFieldPropsType> = ({
   newTextChangeHandler, newPostText, clearTextarea, onAddPost
}) => {
   const { handleSubmit, handleChange, values, handleReset } = useFormik({
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
   })
   return (
      <form onSubmit={handleSubmit}>
         <textarea
            id='message'
            name='message'
            value={values.message}
            onChange={handleChange}
         />
         <br />
         <button
            disabled={values.message === ''}
            type='submit'
         >
            Add post
         </button>
         <button
            type='submit'
            disabled={values.message === ''}
            onClick={handleReset}>
            Remove
         </button>
      </form>
   )
}
