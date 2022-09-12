import * as React from 'react';
import s from './Users.module.css'
import defaultAvatar from '../../assets/image/defaultAvatar.png'
import { UserType } from '../../redux/users-reducer';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/Api';

type UsersPresentationalPropsType = {
   totalUsersCount: number
   pageSize: number
   currentPage: number
   users: Array<UserType>
   unfollow: (id: number) => void
   follow: (id: number) => void
   onPageChanged: (currentPage: number) => void
   followingInProgress: Array<number>
}

function Users(props: UsersPresentationalPropsType) {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   debugger
   let curP = props.currentPage;
   let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
   let curPL = curP + 5;
   let slicedPages = pages.slice(curPF, curPL);
   debugger

   return (<div>
      <div className={s.pageNumbersBlock}>{
         slicedPages.map(p => <span className={props.currentPage === p ? s.selectedPage : ''} onClick={(e) => { props.onPageChanged(p); }}>{p}</span>)
      }</div>

      {
         props.users.map(u => <div className={s.users} key={u.id}>
            <span>
               <div>
                  <NavLink to={'/profile/' + u.id}>
                     <img src={u.photos.large != null ? u.photos.large : defaultAvatar} alt="" />
                  </NavLink>
               </div>
               <div>
                  {u.followed
                     ? <button disabled={props.followingInProgress.some(i => i === u.id)} onClick={() => {
                        props.unfollow(u.id)
                     }}>Unfollow</button>
                     : <button disabled={props.followingInProgress.some(i => i === u.id)} onClick={() => {
                        props.follow(u.id)
                     }}>Follow</button>

                  }
               </div>
            </span>
            <span>
               <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
               </span>
               <span>
                  <div>{"u.location.country"}</div>
                  <div>{"u.location.city"}</div>
               </span>
            </span>
         </div>)
      }
   </div>);
}

export default Users;