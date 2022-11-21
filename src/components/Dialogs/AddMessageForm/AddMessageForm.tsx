import { Form, Formik } from 'formik'
import React, { ChangeEvent } from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './AddMessageForm.module.css'

type AddMessageFormPropsType = {
   messagesElements: JSX.Element[]
   emptyField: () => boolean
   newMessageBody: string
   addNewMessage: () => void
   onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextareaField: React.FC<AddMessageFormPropsType> = ({
   messagesElements, newMessageBody, onNewMessageChange, emptyField, addNewMessage
}) => {
   return (
      <div className={s.messages}>
         {messagesElements}
         <textarea
            placeholder="Enter your message"
            value={newMessageBody}
            onChange={onNewMessageChange}
            className={s.textarea} >
         </textarea >
      </div>
   )
}

const AddMessageForm: React.FC<AddMessageFormPropsType> = ({
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
            <Form>
               <>
                  <TextareaField
                     messagesElements={messagesElements}
                     newMessageBody={newMessageBody}
                     onNewMessageChange={onNewMessageChange}
                     emptyField={emptyField}
                     addNewMessage={addNewMessage}
                  />
                  <button onClick={addNewMessage} disabled={emptyField()}>Send</button>
               </>
            </Form>
         </Formik>
      </>
   )
}

{/* <form
   onSubmit={ }
   className={s.messages}>

   {props.messagesElements}

   {
      <Field
         placeholder="Enter your message"
         component='textarea'
         name='Message body' />
   }

   {<textarea
      placeholder="Enter your message"
      value={newMessageBody}
      onChange={onNewMessageChange}
      className={s.textarea}></textarea>}

   {<button
      disabled={emptyField()}
      onClick={addNewMessage}
   >
      Send
   </button>}
</form> */}

export default AddMessageForm
