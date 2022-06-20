import React, { LegacyRef, MutableRefObject, RefObject, useRef } from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css';
import { PostType, ProfilePageType } from "../../../redux/state";

// RefObject<HTMLTextAreaElement>

const MyPosts = (props: ProfilePageType) => {

   let postsElements = props.posts.map((p: PostType) => <Post id={p.id} message={p.message} likecount={p.likecount} />)
   let newPostElement = React.createRef<HTMLTextAreaElement>()
   let addPost = () => {
      let text = newPostElement.current?.value
      alert(text)
   }

   return (
      <div className={s.postsBlock}>
         My posts
         <div>
            <div>
               <textarea ref={newPostElement}></textarea>
            </div>
            <div>
               <button onClick={addPost}>Add post</button>
               <button>Remove</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   );
}
export default MyPosts;