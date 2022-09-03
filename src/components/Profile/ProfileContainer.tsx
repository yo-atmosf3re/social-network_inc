import React from "react";
import { ProfileLocalStateType } from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

class ProfileContainer extends React.Component {
   render() {
      return (
         <div>
            <ProfileInfo />
            <MyPostsContainer />
         </div>
      );
   }
}

export default ProfileContainer;