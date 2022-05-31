import React from "react";
import { ProfilePageType, RootStatePropsType, RootStateType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import s from './Profile.module.css';



const Profile: React.FC<ProfilePageType> = (props) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts posts={props.posts} />
      </div>
   );
}

export default Profile;