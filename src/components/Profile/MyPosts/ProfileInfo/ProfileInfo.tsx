import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
   return (
      <div>
         <div className="profileinfo">
            <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
            <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
         </div>
         <div className={s.descriptionBlock}>
            ava + description
         </div>
      </div>
   )
}

export default ProfileInfo;