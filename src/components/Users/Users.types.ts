import { initialStateType, UserType } from "../../redux/users-reducer"

export type UsersPresentationalPropsType = {
   totalUsersCount: number
   pageSize: number
   currentPage: number
   users: Array<UserType>
   unfollow: (id: number) => void
   follow: (id: number) => void
   onPageChanged: (pageNumber: number, pageSize: number) => void
   followingInProgress: Array<number>
}

// Типизация для MapDispatchToProps
export type MapDispatchToPropsType = {
   followSuccess: (userId: number) => void
   unfollowSuccess: (userId: number) => void
   setUserPage: (currentPage: number) => void
   toggleFollowingProgress: (isFetching: boolean, userId: number) => void
   getUsersTC: (currentPage: number, pageSize: number) => void
}

// Типизация для props компоненты Users
export type UsersPropsType = MapDispatchToPropsType & initialStateType;