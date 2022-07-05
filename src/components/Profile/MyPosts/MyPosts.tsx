import React, { ChangeEvent, MouseEventHandler } from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css';
import { addPost, PostType, ProfilePageType } from "../../../redux/state";

// RefObject<HTMLTextAreaElement>

const MyPosts = (props: ProfilePageType) => {

   let postsElements =
      props.posts.map((p: PostType) => <Post id={p.id} message={p.message} likecount={p.likecount} />)

   const addNewPost = () => {
      props.addPost(props.newPostText)
   }
   const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.updateNewPostText(e.currentTarget.value)
   }
   const clearTextarea = () => {
      props.updateNewPostText('')
      props.updateNewPostText('')
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