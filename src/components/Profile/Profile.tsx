import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import { PostPropsType } from "./MyPosts/Post/Post";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import s from './Profile.module.css';



const Profile = (props: any) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts />
      </div>
   );
}

export default Profile;