import React from 'react';
import { UsersStateType } from '../../redux/users-reducer';
import s from './Users.module.css'
import { UsersPropsType } from './UsersContainer';

let Users = (props: UsersPropsType) => {
   if (props.users.length === 0) {
      props.setUsers(
         [
            { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZYSxc3XHXqhhaUedCBWKj9VX8s1K0_4hhrL_xaSJ06iaKEvyUWdQIK6BaIaTZjIxm-c&usqp=CAU', followed: true, fullName: 'Alex', status: 'Hello, i am  cat', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvoIKT38HAgpdoHEsqRSphdHt7Kwbx9AZPg&usqp=CAU', followed: false, fullName: 'Dima', status: 'Hello, i am  bear', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, photoUrl: 'https://bipbap.ru/wp-content/uploads/2018/02/ac21aca13a62c0a39bcedb8375b07f8e.jpg', followed: true, fullName: 'Jon', status: 'Hello, i am  pig', location: { city: 'Kiev', country: 'Ukraine' } },
         ],
      )
   }
   return <div>
      {
         props.users.map(u => <div className={s.users} key={u.id}>
            <span>
               <div>
                  <img src={u.photoUrl} alt="" />
               </div>
               <div>
                  {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
               </div>
            </span>
            <span>
               <span>
                  <div>{u.fullName}</div>
                  <div>{u.status}</div>
               </span>
               <span>
                  <div>{u.location.country}</div>
                  <div>{u.location.city}</div>
               </span>
            </span>
         </div>)
      }
   </div>
}

export default Users;