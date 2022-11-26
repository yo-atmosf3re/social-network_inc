import * as React from 'react';
import s from './Users.module.css'
import defaultAvatar from '../../assets/image/defaultAvatar.png'
import { UserType } from '../../redux/users-reducer';
import { NavLink } from 'react-router-dom';

type UsersPresentationalPropsType = {
   totalUsersCount: number
   pageSize: number
   currentPage: number
   users: Array<UserType>
   unfollow: (id: number) => void
   follow: (id: number) => void
   onPageChanged: (pageNumber: number, pageSize: number) => void
   followingInProgress: Array<number>
}

const Users: React.FC<UsersPresentationalPropsType> = ({
   currentPage, follow, followingInProgress, onPageChanged, pageSize, totalUsersCount, unfollow, users
}) => {

   const pagesCount = Math.ceil(totalUsersCount / pageSize);
   const pages = [];

   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   const curP = currentPage;
   const curPF = ((curP - 5) < 0) ? 0 : curP - 5;
   const curPL = curP + 5;
   const slicedPages = pages.slice(curPF, curPL);

   return (<div>
      <div
         className={s.pageNumbersBlock}>
         {
            slicedPages.map((p, i) =>
               <span
                  key={i}
                  className={currentPage === p ? s.selectedPage : ''}
                  onClick={(e) => { onPageChanged(p, 10) }}>
                  {p}
               </span>)
         }
      </div>

      {
         users.map(u => <div
            className={s.users}
            key={u.id}>
            <span>
               <div>
                  <NavLink to={'/profile/' + u.id}>
                     <img
                        src={u.photos.large != null ? u.photos.large : defaultAvatar}
                        alt=""
                     />
                  </NavLink>
               </div>
               <div>
                  {u.followed
                     ? <button disabled={followingInProgress.some(i => i === u.id)} onClick={() => {
                        unfollow(u.id)
                     }}>Unfollow</button>
                     : <button disabled={followingInProgress.some(i => i === u.id)} onClick={() => {
                        follow(u.id)
                     }}>Follow</button>

                  }
               </div>
            </span>
            <span>
               <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
               </span>
            </span>
         </div>)
      }
   </div>);
}

export default Users;
