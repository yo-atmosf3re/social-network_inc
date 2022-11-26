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

const Profile: React.FC<ProfilePropsType> = ({
   status, updateStatus, profile
}) => {
   return (
      <div>
         <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
         <MyPostsContainer />
      </div>
   );
}

export default Profile;