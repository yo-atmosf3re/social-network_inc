import { useFormik } from 'formik'
import React from 'react'
import s from './AddMessageForm.module.css'
import { AddMessageTextareaPropsType } from './AddMessageForm.types'

export const AddMessageForm: React.FC<AddMessageTextareaPropsType> = ({
   addNewMessage, messagesElements, newMessageBody, onNewMessageChange
}) => {

   const { handleChange, handleSubmit, values } = useFormik({
      initialValues: {
         message: newMessageBody
      },
      onSubmit: (values) => {
         onNewMessageChange(values.message)
         addNewMessage()
         values.message = ''
      }
   })
   return (
      <form
         onSubmit={handleSubmit}
         className={s.messages}>
         {messagesElements}
         <textarea
            value={values.message}
            name='message'
            onChange={handleChange}
            className={s.textarea}
            placeholder="Enter your message"
         >
         </textarea >
         <button
            type='submit'
            disabled={values.message === ''}
         >
            Send
         </button>
      </form>
   )
}
