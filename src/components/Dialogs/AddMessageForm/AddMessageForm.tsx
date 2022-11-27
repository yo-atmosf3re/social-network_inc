import { Field, Form, Formik } from 'formik'
import React, { ChangeEvent } from 'react'
import s from './AddMessageForm.module.css'

export type AddMessageTextareaPropsType = {
   messagesElements: JSX.Element[]
   emptyField: () => boolean
   newMessageBody: string
   addNewMessage: () => void
   onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const AddMessageForm: React.FC<AddMessageTextareaPropsType> = ({
   messagesElements, newMessageBody, onNewMessageChange, emptyField, addNewMessage
}) => {
   return (
      <>
         <Formik
            initialValues={{
               newMessageBody: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
               setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
               }, 400);
            }}
         >
            {({
               handleSubmit,
               handleChange,
               values,
               handleBlur
            }) => {
               return (
                  <Form className={s.messages}>
                     {messagesElements}
                     <Field
                        // onSubmit={handleSubmit}
                        className={s.textarea}
                        as='textarea'
                        placeholder="Enter your message"
                        value={values.newMessageBody}
                     // onChange={onNewMessageChange}
                     >
                     </Field >
                     <button
                        onClick={addNewMessage}
                        disabled={emptyField()}
                     >
                        Send
                     </button>
                  </Form>
               )
            }}
            {/* <Form>
               <TextareaField
                  messagesElements={messagesElements}
                  newMessageBody={newMessageBody}
                  onNewMessageChange={onNewMessageChange}
                  emptyField={emptyField}
                  addNewMessage={addNewMessage}
               />
               <button onClick={addNewMessage} disabled={emptyField()}>Send</button>
            </Form> */}
         </Formik>
      </>
   )
}

export default AddMessageForm
