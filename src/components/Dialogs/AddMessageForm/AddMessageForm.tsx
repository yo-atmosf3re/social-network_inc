import { Field, Form, Formik, useFormik, withFormik } from 'formik'
import React, { ChangeEvent, FormEventHandler, useState } from 'react'
import s from './AddMessageForm.module.css'

export type AddMessageTextareaPropsType = {
   messagesElements: JSX.Element[]
   newMessageBody: string
   addNewMessage: () => void
   onNewMessageChange: (text: string) => void
}

const AddMessageForm: React.FC<AddMessageTextareaPropsType> = ({
   addNewMessage, messagesElements, newMessageBody, onNewMessageChange
}) => {

   const { handleChange, handleSubmit, values } = useFormik({
      initialValues: {
         message: newMessageBody
      },
      onSubmit: (values) => {
         onNewMessageChange(values.message)
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
            onClick={addNewMessage}
            disabled={values.message === ''}
         >
            Send
         </button>
      </form>
   )
}

export default AddMessageForm
