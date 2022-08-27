import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { usersReducer, UsersStateType, UserType } from '../../redux/users-reducer';
import s from './Users.module.css'
import { UsersPropsType } from './UsersContainer';
import defaultAvatar from '../../assets/image/defaultAvatar.png'

class Users extends React.Component<UsersPropsType, {}> {
   componentDidMount(): void {
      axios.get<UserType>('https://social-network.samuraijs.com/api/1.0/users')
         .then((response: any) => {
            this.props.setUsers(response.data.items)
         })
   }

   render() {
      return <div>
         {
            this.props.users.map(u => <div className={s.users} key={u.id}>
               <span>
                  <div>
                     <img src={u.photos.large != null ? u.photos.large : defaultAvatar} alt="" />
                  </div>
                  <div>
                     {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}

export default Users;