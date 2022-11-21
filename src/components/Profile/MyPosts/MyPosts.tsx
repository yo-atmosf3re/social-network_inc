import React, { ChangeEvent } from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css';
import { PostType } from "../../../redux/store";
import { MyPostPropsType } from "./MyPostsContainer";
import PostTextareaField from "./PostTextareField/PostTextareaField";




const MyPosts: React.FC<MyPostPropsType> = ({
   addPost, newPostText, posts, updateNewPostText
}) => {

   const postsElements = posts.map((p: PostType) => <Post id={p.id} message={p.message} likecount={p.likecount} key={p.id} />)

   const onAddPost = () => addPost()

   const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => updateNewPostText(e.currentTarget.value)

   const clearTextarea = () => updateNewPostText('')

   const emptyField = () => newPostText === '' ? true : false

   return (
      <div className={s.postsBlock}>
         My posts
         <div>
            <PostTextareaField
               newTextChangeHandler={newTextChangeHandler}
               newPostText={newPostText}
               emptyField={emptyField}
               clearTextarea={clearTextarea}
               onAddPost={onAddPost}
            />
         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   );
}
export default MyPosts;