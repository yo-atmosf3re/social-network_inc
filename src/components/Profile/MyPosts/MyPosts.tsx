import React, { useCallback } from "react";
import s from './MyPost.module.css';
import { PostType } from "../../../redux/store";
import { MyPostPropsType } from "./MyPostContainer";
import { Post } from "./Post";
import { PostTextareaField } from "./PostTextareField";

export const MyPosts: React.FC<MyPostPropsType> = ({
   addPost, newPostText, posts, updateNewPostText
}) => {

   const postsElements = posts.map((p: PostType) => <Post id={p.id} message={p.message} likecount={p.likecount} key={p.id} />)

   const onAddPost = useCallback(() => addPost(), [addPost])

   const newTextChangeHandler = useCallback((text: string) => updateNewPostText(text), [updateNewPostText])

   const clearTextarea = useCallback(() => updateNewPostText(''), [updateNewPostText])

   return (
      <div className={s.postsBlock}>
         My posts
         <div>
            <PostTextareaField
               newTextChangeHandler={newTextChangeHandler}
               newPostText={newPostText}
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