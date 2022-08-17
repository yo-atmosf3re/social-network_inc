
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { AppStateType } from '../../redux/redux-store';
import { followAC, initialStateType, setUsersAC, unfollowAC, usersReducer, UserType } from '../../redux/users-reducer';
import Users from './Users';


// Типизация для MapDispatchToProps
type MapDispatchToPropsType = {}

// Типизация для props компоненты Users
export type UsersPropsType = MapDispatchToPropsType & initialStateType;

// Функция, которая берет весь стэйт приложения целиком и возвращает только нужную часть этого стэйта, который передаётся в контейнерную компоненту.
let mapStateToProps = (state: AppStateType): initialStateType => ({ users: state.usersPage.users })
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
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;