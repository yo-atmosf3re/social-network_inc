import axios from 'axios';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { follow, initialStateType, setUserPage, setIsFetching, setTotalUsersCount, setUsers, unfollow, UserType } from '../../redux/users-reducer';
import Users from './Users';
import preloader from '../../assets/image/preloader.svg';
import s from './Users.module.css'
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component<UsersPropsType, {}> {
   componentDidMount(): void {
      this.props.setIsFetching(true)
      axios.get<UserType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then((response: any) => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }

   onPageChanged = (pageNumber: number) => {
      this.props.setIsFetching(true)
      this.props.setUserPage(pageNumber)
      axios.get<UserType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then((response: any) => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
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
   setIsFetching: (isFetching: boolean) => void
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
   setIsFetching,
})(UsersContainer);