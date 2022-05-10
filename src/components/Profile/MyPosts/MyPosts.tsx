import React from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css';

// type MyPostsPropsType = {
//    message: string,
//    likecount: string,
// }

const MyPosts = (props: any) => {
   return (
      <div>
         My posts
         <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
         </div>
         <div className={s.posts}>
            <Post message='Hi, how are you?' likecount="♥ 20" />
            <Post message="It's my first post" likecount="♥ 14" />
         </div>
      </div>
   );
}

export default MyPosts;