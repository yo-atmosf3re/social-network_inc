import React from "react";
import { ProfileLocalStateType } from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import { ProfilePagePropsType } from "./ProfileContainer";

const Profile = (props: ProfilePagePropsType) => {
   return (
      <div>
         <ProfileInfo />
         <MyPostsContainer />
      </div>
   );
}

export default Profile;