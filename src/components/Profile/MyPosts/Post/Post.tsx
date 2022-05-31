import React from "react";
import { PostType } from "../../../../redux/state";
import s from './Post.module.css';

const Post: React.FC<PostType> = (props) => {
   return (
      <div className={s.item}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZYSxc3XHXqhhaUedCBWKj9VX8s1K0_4hhrL_xaSJ06iaKEvyUWdQIK6BaIaTZjIxm-c&usqp=CAU" alt="" />
         {props.message}
         <br />
         <span>Like {props.likecount}</span>
      </div>
   );
}

export default Post;