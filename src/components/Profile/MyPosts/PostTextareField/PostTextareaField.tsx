import { Form, Formik } from 'formik'
import React, { ChangeEvent } from 'react'

type PostTextFieldPropsType = {
   newTextChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
   newPostText: string
   emptyField: () => boolean
   clearTextarea: () => void
   onAddPost: () => void
}

const PostTextareaField: React.FC<PostTextFieldPropsType> = ({
   newTextChangeHandler, newPostText, emptyField, clearTextarea, onAddPost
}) => {
   return (
      <Formik
         initialValues={{
            newPostText: ''
         }}
         onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
               console.log(JSON.stringify(values, null, 2));
               setSubmitting(false);
            }, 400);
         }}>
         <Form>
            <div>
               <textarea
                  onChange={newTextChangeHandler}
                  value={newPostText} />
            </div>
            <div>
               <button disabled={emptyField()} onClick={onAddPost}>Add post</button>
               <button type='submit' onClick={clearTextarea}>Remove</button>
            </div>
         </Form>
      </Formik>
   )
}

export default PostTextareaField
