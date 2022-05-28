import React from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css';

export type MyPostsPropsType = {
   id: string
   message: string
   likecount: string
}

const MyPosts = (props: MyPostsPropsType) => {

   let postsElements = props.map((p: { id: string; message: string; likecount: string; }) => <Post id={p.id} message={p.message} likecount={p.likecount} />)

   return (
      <div className={s.postsBlock}>
         My posts
         <div>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add post</button>
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