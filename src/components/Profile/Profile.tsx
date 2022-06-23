import React from "react";
import { PostType, ProfileLocalStateType, ProfilePageType, RootStatePropsType, RootStateType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import s from './Profile.module.css';



const Profile = (props: ProfileLocalStateType) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts posts={props.state.posts} addPost={props.addPost} />
      </div>
   );
}

export default Profile;