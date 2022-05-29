import React from "react";
import { PostsPropsType } from "../..";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import s from './Profile.module.css';



const Profile = (props: PostsPropsType) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts posts={props.posts} />
      </div>
   );
}

export default Profile;