import * as React from 'react';
import s from './Users.module.css'
import defaultAvatar from '../../assets/image/defaultAvatar.png'
import { NavLink } from 'react-router-dom';
import { UsersPresentationalPropsType } from './Users.types';
import { useState } from 'react';


export const Users: React.FC<UsersPresentationalPropsType> = ({
   currentPage, follow, followingInProgress,
   onPageChanged, pageSize, totalUsersCount,
   unfollow, users
}) => {

   const pagesCount = Math.ceil(totalUsersCount / pageSize);
   const pages: number[] = [];

   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   const [int, setInt] = useState<number>(currentPage)

   const paginationCompute = (): number[] => pages.slice(((int - 5) < 0) ? 0 : int - 5, int + 5);
   const handlerPagination = (value: number): void => {
      setInt(value)
      onPageChanged(value, 10)
   }
   const classNamePaginatorCondition = (p: number): string => int === p ? s.selectedPage : ''

   return (
      <div>
         <div
            className={s.pageNumbersBlock}>
            {
               paginationCompute().map((p, i) =>
                  <span
                     key={i}
                     className={classNamePaginatorCondition(p)}
                     onClick={() => { handlerPagination(p) }}>
                     {p}
                  </span>)
            }
         </div>
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

