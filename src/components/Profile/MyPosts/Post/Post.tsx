import React from "react";
import { PostType } from "../../../../redux/store";
import s from './Post.module.css';
import defaultAvatar from '../../../../assets/image/defaultAvatar.png'

export const Post: React.FC<PostType> = ({
   message, likecount
}) => {
   return (
      <div className={s.item}>
         <img
            src={defaultAvatar}
            alt=""
         />
         {message}
         <br />
         <span>Like {likecount}</span>
      </div>
   );
}

export default Post;