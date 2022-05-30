import React from "react";
import { AllPropsType, PostsPropsType } from "../..";
import { ProfilePageType, StateType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import s from './Profile.module.css';



const Profile = (props: ProfilePageType) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts posts={props.state.posts} />
      </div>
   );
}

export default Profile;