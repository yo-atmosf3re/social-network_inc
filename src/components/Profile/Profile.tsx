import React from "react";
import { ProfileLocalStateType } from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props: ProfileLocalStateType) => {
   return (
      <div>
         <ProfileInfo />
         <MyPostsContainer store={props.store} />
      </div>
   );
}

export default Profile;