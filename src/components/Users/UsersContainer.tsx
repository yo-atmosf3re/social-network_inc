import axios from 'axios';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { AppStateType } from '../../redux/redux-store';
import { followAC, initialStateType, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, UserType } from '../../redux/users-reducer';
import Users from './Users';

class UsersContainer extends React.Component<UsersPropsType, {}> {
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

// Типизация для MapDispatchToProps
type MapDispatchToPropsType = {
   follow: (userId: number) => void
   unfollow: (userId: number) => void
   setUsers: (users: Array<UserType>) => void
   setUserPage: (currentPage: number) => void
   setTotalUsersCount: (totalCount: number) => void
}

// Типизация для props компоненты Users
export type UsersPropsType = MapDispatchToPropsType & initialStateType;

// Функция, которая берет весь стэйт приложения целиком и возвращает только нужную часть этого стэйта, который передаётся в контейнерную компоненту.
let mapStateToProps = (state: AppStateType): initialStateType => ({
   users: state.usersPage.users,
   pageSize: state.usersPage.pageSize,
   totalUsersCount: state.usersPage.totalUsersCount,
   currentPage: state.usersPage.currentPage,
})
// Функция, которая передаёт callback'и в контейнерную компоненту
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      follow: (userId: number) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId: number) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (users: Array<UserType>) => {
         dispatch(setUsersAC(users))
      },
      setUserPage: (currentPage: number) => {
         dispatch(setCurrentPageAC(currentPage))
      },
      setTotalUsersCount: (totalCount: number) => {
         dispatch(setTotalUsersCountAC(totalCount))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);