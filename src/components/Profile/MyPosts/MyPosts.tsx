import React from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css';

// type MyPostsPropsType = {
//    message: string,
//    likecount: string,
//    id: string
// }

const MyPosts = (props: any) => {
   let posts = [
      { id: "1", message: 'Hi, how are you?', likecount: '♥ 20' },
      { id: "2", message: "It's my first post", likecount: '♥ 14' },
      { id: "3", message: "It's my second post", likecount: '♥ 0' },
   ]

   let postsElements = posts.map(p => <Post id={p.id} message={p.message} likecount={p.likecount} />)

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