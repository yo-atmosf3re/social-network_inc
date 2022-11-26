import React from "react";
import { ProfilePageType } from "../../ProfileContainer";
import s from './ProfileInfo.module.css'
import defaultAvatar from '../../../../assets/image/defaultAvatar.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preloader from "../../../common/Preloader/Preloader";
import profileInfoBG from '../../../../assets/image/profileInfoBG.jpg'

type ProfileInfoPropsType = {
   profile: ProfilePageType | null
   status: string
   updateStatus: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
   profile, status, updateStatus
}) => {

   if (!profile) {
      return <Preloader />
   }

   const {
      aboutMe, contacts, fullName, lookingForAJobDescription, photos, userId
   } = profile;

   const imageCondition = photos.small !== null ? photos.small : defaultAvatar;

   return (
      <div>
         <div className="profileinfo">
            <img src={profileInfoBG} />
         </div>
         <div className={s.descriptionBlock}>
            <img src={imageCondition} />
            <br />
            <ProfileStatus status={status} updateStatus={updateStatus} />
            <br />
            {aboutMe}
            <br />
            {contacts.facebook}
            <br />
            {fullName}
            <br />
            {lookingForAJobDescription}
            <br />
            {userId}
         </div>
      </div>
   )
}

export default ProfileInfo;