import React, { ChangeEvent } from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css';
import { addPostActionCreator, MyPostPropsType, PostType, updateNewTextActionCreator } from "../../../redux/state";



const MyPosts = (props: MyPostPropsType) => {

   let postsElements =
      props.posts.map((p: PostType) => <Post id={p.id} message={p.message} likecount={p.likecount} key={p.id} />)

   const addNewPost = () => {
      props.dispatch(addPostActionCreator())
   }
   const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const text = e.currentTarget.value;
      let action = updateNewTextActionCreator(text)
      props.dispatch(action)

   }
   const clearTextarea = () => {
      const emptyLine = '';
      props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: emptyLine })
   }

   return (
      <div className={s.postsBlock}>
         My posts
         <div>
            <div>
               <textarea
                  onChange={newTextChangeHandler}
                  value={props.newPostText} />
            </div>
            <div>
               <button onClick={addNewPost}>Add post</button>
               <button onClick={clearTextarea}>Remove</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   );
}
export default MyPosts;