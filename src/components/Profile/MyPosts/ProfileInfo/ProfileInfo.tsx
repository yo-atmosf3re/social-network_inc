import React from "react";
import s from './ProfileInfo.module.css'
import defaultAvatar from '../../../../assets/image/defaultAvatar.png'
import profileInfoBG from '../../../../assets/image/profileInfoBG.jpg'
import { ProfileInfoPropsType } from "./ProfileInfo.types";
import { Preloader } from "../../../common/Preloader";
import { ProfileStatus } from "./ProfileStatus";

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
            <img
               alt={'Background'}
               src={profileInfoBG} />
         </div>
         <div className={s.descriptionBlock}>
            <img
               alt={'Condition'}
               src={imageCondition} />
            <br />
            <ProfileStatus
               status={status}
               updateStatus={updateStatus} />
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