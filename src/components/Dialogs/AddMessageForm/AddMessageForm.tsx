import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import s from './AddMessageForm.module.css'
import { AddMessageTextareaPropsType } from './AddMessageForm.types'

const TEXTAREA_CONDITION_ERROR = { opacity: '0.7', border: '2px solid crimson' }

export const AddMessageForm: React.FC<AddMessageTextareaPropsType> = ({
   addNewMessage, messagesElements, newMessageBody, onNewMessageChange
}) => {

   const validationSchema = Yup.object({
      message: Yup.string()
         .max(120, "Must be 121 characters or less, press 'Clear' for clear the field")
   })

   const { handleChange, handleSubmit, values, errors, handleReset } = useFormik({
      initialValues: {
         message: newMessageBody
      },
      onSubmit: (values) => {
         onNewMessageChange(values.message)
         addNewMessage()
         values.message = ''
      },
      onReset: (values) => {
         values.message = ''
      },
      validationSchema
   })

   const submitButtonCondition = values.message === '' || !!errors.message
   const isDisabledClearButton = values.message === ''
   const isDisabledTextarea = errors.message ? TEXTAREA_CONDITION_ERROR : undefined

   return (
      <form
         onSubmit={handleSubmit}
         className={s.messages}>
         {messagesElements}
         <div className={s.formWrapper}>
            <textarea
               value={values.message}
               disabled={!!errors.message}
               name='message'
               onChange={handleChange}
               className={s.textarea}
               style={isDisabledTextarea}
               placeholder="Enter your message"
            />
         </div>
         <button
            type='submit'
            disabled={submitButtonCondition}
         >
            Send
         </button>
         <button
            disabled={isDisabledClearButton}
            onClick={handleReset}
            className={s.clearButton}
         >
            Clear
         </button>
         <span className={s.titleError}>
            {
               errors.message ? errors.message : null
            }
         </span>
      </form>
   )
}
