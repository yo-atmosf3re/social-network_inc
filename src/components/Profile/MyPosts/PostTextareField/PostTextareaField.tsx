import { Form, Formik, useFormik } from 'formik'
import React, { ChangeEvent } from 'react'

type PostTextFieldPropsType = {
   newTextChangeHandler: (text: string) => void
   newPostText: string
   emptyField: () => boolean
   clearTextarea: () => void
   onAddPost: () => void
}

// const PostTextareaField: React.FC<PostTextFieldPropsType> = ({
//    newTextChangeHandler, newPostText, emptyField, clearTextarea, onAddPost
// }) => {
//    return (
//       <Formik
//          initialValues={{
//             newPostText: ''
//          }}
//          onSubmit={(values, { setSubmitting }) => {
//             setTimeout(() => {
//                console.log(JSON.stringify(values, null, 2));
//                setSubmitting(false);
//             }, 400);
//          }}>
//          <Form>
//             <textarea
//                // onSubmit={}
//                onChange={newTextChangeHandler}
//                value={newPostText}
//             />
//             <br />
//             <button disabled={emptyField()} onClick={onAddPost}>Add post</button>
//             <button type='submit' onClick={clearTextarea}>Remove</button>
//          </Form>
//       </Formik>
//    )
// }

const PostTextareaField: React.FC<PostTextFieldPropsType> = ({
   newTextChangeHandler, newPostText, emptyField, clearTextarea, onAddPost
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
   console.log(values.message)
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

export default PostTextareaField
