import * as React from 'react';
import s from './Users.module.css'
import defaultAvatar from '../../assets/image/defaultAvatar.png'
import { NavLink } from 'react-router-dom';
import { UsersPresentationalPropsType } from './Users.types';
import { Paginator } from '../../utils/Paginator';


export const Users: React.FC<UsersPresentationalPropsType> = ({
   currentPage, follow, followingInProgress,
   onPageChanged, pageSize, totalUsersCount,
   unfollow, users
}) => {
   return (
      <div>
         <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
         />
         {
            users.map(u =>
               <div
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
                        {
                           u.followed
                              ? <button
                                 disabled={followingInProgress.some(i => i === u.id)}
                                 onClick={() => { unfollow(u.id) }}>
                                 Unfollow
                              </button>
                              : <button
                                 disabled={followingInProgress.some(i => i === u.id)} onClick={() => { follow(u.id) }}>
                                 Follow
                              </button>
                        }
                     </div>
                  </span>
                  <span>
                     <div>
                        {u.name}
                     </div>
                     <div>
                        {u.status}
                     </div>
                  </span>
               </div>)
         }
      </div>);
}

