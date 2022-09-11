import axios from 'axios';
import * as React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { follow, initialStateType, setUserPage, toggleIsFetching, setTotalUsersCount, setUsers, unfollow, UserType, toggleFollowingProgress, getUsersThunkCreator } from '../../redux/users-reducer';
import Users from './Users';
import s from './Users.module.css'
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/Api';
import { Dispatch } from 'redux';

class UsersContainer extends React.Component<UsersPropsType, {}> {
   componentDidMount(): void {
      // this.props.toggleIsFetching(true)
      // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      //    this.props.toggleIsFetching(false)
      //    this.props.setUsers(data.items)
      //    this.props.setTotalUsersCount(data.totalCount)
      // })
      // this.props.getUsersThunkCreator()
   }

   onPageChanged = (pageNumber: number) => {
      this.props.toggleIsFetching(true)
      this.props.setUserPage(pageNumber)
      usersAPI.getUsers(pageNumber, this.props.pageSize)
         .then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
         })
   }

   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
         />
      </>
   }
}

// Типизация для MapDispatchToProps
type MapDispatchToPropsType = {
   follow: (userId: number) => void
   unfollow: (userId: number) => void
   setUsers: (users: Array<UserType>) => void
   setUserPage: (currentPage: number) => void
   setTotalUsersCount: (totalCount: number) => void
   toggleIsFetching: (isFetching: boolean) => void
   toggleFollowingProgress: (isFetching: boolean, userId: number) => void
   getUsersThunkCreator: (currentPage: number, pageSize: number) => (dispatch: Dispatch) => any
}

// Типизация для props компоненты Users
export type UsersPropsType = MapDispatchToPropsType & initialStateType;

// Функция, которая берет весь стэйт приложения целиком и возвращает только нужную часть этого стэйта, который передаётся в контейнерную компоненту.
let mapStateToProps = (state: AppStateType): initialStateType => ({
   users: state.usersPage.users,
   pageSize: state.usersPage.pageSize,
   totalUsersCount: state.usersPage.totalUsersCount,
   currentPage: state.usersPage.currentPage,
   isFetching: state.usersPage.isFetching,
   followingInProgress: state.usersPage.followingInProgress,
})
// Функция, которая передаёт callback'и в контейнерную компоненту
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//    return {
//       follow: (userId: number) => {
//          dispatch(follow(userId))
//       },
//       unfollow: (userId: number) => {
//          dispatch(unfollow(userId))
//       },
//       setUsers: (users: Array<UserType>) => {
//          dispatch(setUsers(users))
//       },
//       setUserPage: (currentPage: number) => {
//          dispatch(setCurrentPage(currentPage))
//       },
//       setTotalUsersCount: (totalCount: number) => {
//          dispatch(setTotalUsersCount(totalCount))
//       },
//       setIsFetching: (isFetching: boolean) => {
//          dispatch(setIsFetching(isFetching))
//       }
//    }
// }

export default connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setUserPage,
   setTotalUsersCount,
   toggleIsFetching,
   toggleFollowingProgress,
   // getUsersThunkCreator
})(UsersContainer);