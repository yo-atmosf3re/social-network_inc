import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = (props: any) => {
   return (
      <div className={s.content}>
         <div>
            <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
         </div>
         <div>
            ava + description
         </div>
         <MyPosts />
      </div>
   );
}

export default Profile;