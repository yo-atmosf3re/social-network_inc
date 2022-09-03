import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props: any) => {
   return (
      <div>
         <ProfileInfo profile={props.profile} />
         <MyPostsContainer />
      </div>
   );
}

export default Profile;