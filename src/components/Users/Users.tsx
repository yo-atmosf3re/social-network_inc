import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { UsersStateType, UserType } from '../../redux/users-reducer';
import s from './Users.module.css'
import { UsersPropsType } from './UsersContainer';
import defaultAvatar from '../../assets/image/defaultAvatar.png'

let Users = (props: UsersPropsType) => {
   let getUsers = () => {
      if (props.users.length === 0) {
         axios.get<UserType>('https://social-network.samuraijs.com/api/1.0/users').then((response: any) => {
            props.setUsers(response.data.items)
         })
      }

   }
   return <div>
      <button onClick={getUsers}>Get users</button>
      {
         props.users.map(u => <div className={s.users} key={u.id}>
            <span>
               <div>
                  <img src={u.photos.large != null ? u.photos.large : defaultAvatar} alt="" />
               </div>
               <div>
                  {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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
   </div>
}

export default Users;