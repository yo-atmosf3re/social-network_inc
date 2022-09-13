import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import { ProfilePageType } from "../../ProfileContainer";
import s from './ProfileInfo.module.css'
import defaultAvatar from '../../../../assets/image/defaultAvatar.png'

type ProfileInfoPropsType = {
   profile: ProfilePageType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div>
         <div className="profileinfo">
            <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
         </div>
         <div className={s.descriptionBlock}>
            <img src={props.profile.photos.small !== null ? props.profile.photos.small : defaultAvatar} />
            <br />
            {props.profile.aboutMe}
            <br />
            {props.profile.contacts.facebook}
            <br />
            {props.profile.fullName}
            <br />
            {props.profile.lookingForAJobDescription}
            <br />
            {props.profile.userId}
         </div>
      </div>
   )
}

export default ProfileInfo;