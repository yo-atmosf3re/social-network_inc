import { Field, Form, Formik, withFormik } from 'formik'
import React, { ChangeEvent, FormEventHandler } from 'react'
import s from './AddMessageForm.module.css'

export type AddMessageTextareaPropsType = {
   messagesElements: JSX.Element[]
   emptyField: () => boolean
   newMessageBody: string
   addNewMessage: () => void
   onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
   handleSubmit?: FormEventHandler<HTMLFormElement>
}

// const AddMessageForm: React.FC<AddMessageTextareaPropsType> = ({
//    messagesElements, newMessageBody, onNewMessageChange, emptyField, addNewMessage
// }) => {
//    return (
//       <>
//          <Formik
//             initialValues={{
//                newMessageBody: '',
//             }}
//             onSubmit={(values, { setSubmitting }) => {
//                setTimeout(() => {
//                   alert(JSON.stringify(values, null, 2));
//                   setSubmitting(false);
//                }, 400);
//             }}
//          >
//             {({
//                handleSubmit,
//                handleChange,
//                values,
//                handleBlur
//             }) => {
//                return (
//                   <Form className={s.messages}>
//                      {messagesElements}
//                      <Field
// onSubmit={handleSubmit}
//                         className={s.textarea}
//                         as='textarea'
//                         placeholder="Enter your message"
//                         value={values.newMessageBody}
// onChange={onNewMessageChange}
//                      >
//                      </Field >
//                      <button
// onClick={addNewMessage}
//                         disabled={emptyField()}
//                      >
//                         Send
//                      </button>
//                   </Form>
//                )
//             }}
//             {/* <Form>
//                <TextareaField
//                   messagesElements={messagesElements}
//                   newMessageBody={newMessageBody}
//                   onNewMessageChange={onNewMessageChange}
//                   emptyField={emptyField}
//                   addNewMessage={addNewMessage}
//                />
//                <button onClick={addNewMessage} disabled={emptyField()}>Send</button>
//             </Form> */}
//          </Formik>
//       </>
//    )
// }

// const AddMessageFormWithFormik = withFormik()(AddMessageForm)

const AddMessageForm: React.FC<AddMessageTextareaPropsType> = (props) => {
   const {
      addNewMessage,
      emptyField,
      messagesElements,
      newMessageBody,
      onNewMessageChange,
      handleSubmit,
   } = props;
   return (
      <form
         // onSubmit={handleSubmit}
         className={s.messages}>
         {messagesElements}
         <textarea
            // value={newMessageBody}
            className={s.textarea}
            placeholder="Enter your message"
         // onChange={onNewMessageChange}
         >
         </textarea >
         <button
         // onClick={addNewMessage}
         // disabled={emptyField()}
         >
            Send
         </button>
      </form>
   )
}

const EnhancedMessageForm = withFormik({
   mapPropsToValues: () => ({ newMessageBody: '' }),
   handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
         alert(JSON.stringify(values, null, 2));
         setSubmitting(false);
      }, 1000);
   },
   displayName: 'AddMessageForm'
})(
   AddMessageForm
)

export default AddMessageForm
