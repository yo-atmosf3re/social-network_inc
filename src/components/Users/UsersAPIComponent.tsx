import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { usersReducer, UsersStateType, UserType } from '../../redux/users-reducer';
import { UsersPropsType } from './UsersContainer';
import Users from './Users';

class UsersAPIComponent extends React.Component<UsersPropsType, {}> {
   componentDidMount(): void {
      axios.get<UserType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then((response: any) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }

   onPageChanged = (pageNumber: number) => {
      this.props.setUserPage(pageNumber)
      axios.get<UserType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then((response: any) => {
            this.props.setUsers(response.data.items)
         })
   }

   render() {
      return <Users
         users={this.props.users}
         totalUsersCount={this.props.totalUsersCount}
         pageSize={this.props.pageSize}
         currentPage={this.props.currentPage}
         unfollow={this.props.unfollow}
         follow={this.props.follow}
         onPageChanged={this.onPageChanged} />
   }
}

export default UsersAPIComponent;