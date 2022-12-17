import React from "react";
import { MyPostContainer } from "./MyPosts";
import { ProfileInfo } from "./MyPosts/ProfileInfo";
import { ProfilePropsType } from "./Profile.types";


export const Profile: React.FC<ProfilePropsType> = ({
   status, updateStatus, profile
}) => {
   return (
      <div>
         <ProfileInfo
            profile={profile}
            status={status}
            updateStatus={updateStatus} />
         <MyPostContainer />
      </div>
   );
}