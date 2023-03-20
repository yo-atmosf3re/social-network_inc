import * as React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import {
   followSuccess, UserReducerInitialStateType, setUserPage,
   unfollowSuccess, toggleFollowingProgress, getUsersTC,
   followTC, unfollowTC
} from '../../redux/users-reducer';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { Preloader } from '../common/Preloader';
import { Users } from '.';
import { UsersPropsType } from './Users.types';
import {
   selectCurrentPage, selectFetched, selectFollowedInProgress,
   selectPageSize, selectTotalUserCount, selectUsers
} from '../../redux/selectors/user-selectors';

class UsersContainer extends React.Component<UsersPropsType, {}> {
   componentDidMount(): void {
      this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
   }

   onPageChanged = (pageNumber: number) => {
      this.props.getUsersTC(pageNumber, this.props.pageSize,)
   }

   render() {
      return <>
         {
            this.props.isFetching
               ? <Preloader />
               : null
         }
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

// Функция, которая берет весь стэйт приложения целиком и возвращает только нужную часть этого стэйта, который передаётся в контейнерную компоненту.
const mapStateToProps = (state: AppStateType): UserReducerInitialStateType => ({
   users: selectUsers(state),
   pageSize: selectPageSize(state),
   totalUsersCount: selectTotalUserCount(state),
   currentPage: selectCurrentPage(state),
   isFetching: selectFetched(state),
   followingInProgress: selectFollowedInProgress(state),
})

export default compose<React.ComponentType>(
   withAuthRedirect,
   connect(mapStateToProps, {
      followSuccess,
      unfollowSuccess,
      setUserPage,
      toggleFollowingProgress,
      getUsersTC,
      follow: followTC,
      unfollow: unfollowTC,
   }),
)(UsersContainer);

// Функция, которая передаёт callback'и в контейнерную компоненту
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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
