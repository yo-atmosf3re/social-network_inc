import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import { ProfilePageType } from "./ProfileContainer";

type ProfilePropsType = {
   profile: null | ProfilePageType
   status: string;
   updateStatus: (status: string) => void;
   setUserProfile: (profile: null) => void
   setUserProfileTC: (userId: number) => void
   getStatus: (userId: number) => void
}

const Profile = (props: ProfilePropsType) => {
   return (
      <div>
         <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
         <MyPostsContainer />
      </div>
   );
}

export default Profile;