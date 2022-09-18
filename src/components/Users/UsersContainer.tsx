import * as React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { followSuccess, initialStateType, setUserPage, unfollowSuccess, toggleFollowingProgress, getUsersTC, follow, unfollow } from '../../redux/users-reducer';
import Users from './Users';
import s from './Users.module.css'
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

class UsersContainer extends React.Component<UsersPropsType, {}> {
   componentDidMount(): void {
      this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
   }

   onPageChanged = (pageNumber: number) => {
      this.props.getUsersTC(pageNumber, this.props.pageSize,)
   }

   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         < Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollowSuccess}
            follow={this.props.followSuccess}
            onPageChanged={this.onPageChanged}
            followingInProgress={this.props.followingInProgress}
         />
      </>
   }
}

// Типизация для MapDispatchToProps
type MapDispatchToPropsType = {
   followSuccess: (userId: number) => void
   unfollowSuccess: (userId: number) => void
   setUserPage: (currentPage: number) => void
   toggleFollowingProgress: (isFetching: boolean, userId: number) => void
   getUsersTC: (currentPage: number, pageSize: number) => void
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



export default withAuthRedirect(connect(mapStateToProps, {
   followSuccess,
   unfollowSuccess,
   setUserPage,
   toggleFollowingProgress,
   getUsersTC,
   follow,
   unfollow,
})(UsersContainer));