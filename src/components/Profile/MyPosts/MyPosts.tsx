import React from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css';

// type MyPostsPropsType = {
//    message: string,
//    likecount: string,
//    id: string
// }

const MyPosts = (props: any) => {
   let postData = [
      { id: "1", message: 'Hi, how are you?', likecount: '♥ 20' },
      { id: "2", message: "It's my first post", likecount: '♥ 14' },
   ]

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
            <Post id={postData[0].id} message={postData[0].message} likecount={postData[0].likecount} />
            <Post id={postData[1].id} message={postData[1].message} likecount={postData[1].likecount} />
         </div>
      </div>
   );
}

export default MyPosts;