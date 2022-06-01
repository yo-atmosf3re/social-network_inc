import React from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css';
import { PostType, ProfilePageType } from "../../../redux/state";


const MyPosts = (props: ProfilePageType) => {

   let postsElements = props.posts.map((p: PostType) => <Post id={p.id} message={p.message} likecount={p.likecount} />)

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