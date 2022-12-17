import React, { ChangeEvent, useCallback } from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css';
import { PostType } from "../../../redux/store";
import { MyPostPropsType } from "./MyPostsContainer";
import PostTextareaField from "./PostTextareField/PostTextareaField";

const MyPosts: React.FC<MyPostPropsType> = ({
   addPost, newPostText, posts, updateNewPostText
}) => {

   const postsElements = posts.map((p: PostType) => <Post id={p.id} message={p.message} likecount={p.likecount} key={p.id} />)

   const onAddPost = useCallback(() => addPost(), [addPost])

   const newTextChangeHandler = useCallback((text: string) => updateNewPostText(text), [updateNewPostText])

   const clearTextarea = useCallback(() => updateNewPostText(''), [updateNewPostText])

   const emptyField = useCallback(() => newPostText === '' ? true : false, [newPostText])

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