import React from "react";
import MyPosts, { MyPostsPropsType } from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import s from './Profile.module.css';

const Profile = (props: any) => {

   let posts = [
      { id: "1", message: 'Hi, how are you?', likecount: '♥ 20' },
      { id: "2", message: "It's my first post", likecount: '♥ 14' },
      { id: "3", message: "It's my second post", likecount: '♥ 0' },
   ]

   return (
      <div>
         <ProfileInfo />
         <MyPosts id={posts[0].id} message={posts[0].message} likecount={posts[0].likecount} posts={ } />
      </div>
   );
}

export default Profile;