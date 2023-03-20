import { usersAPI } from "../api/Api";
import { AppActionsTypes, AppThunkType } from "./redux-store";

// ** Константы для AC
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

// ** Типизация начального стэйта, который должен возвращать сам редьюсер
export type UsersStateType = typeof initialState


// ** Типизация массива
export type UserType = {
   photos: { small?: string | null, large?: string | null }
   id: number
   followed: boolean
   name: string
   status: string
}

// ** Типизация начального стэйта
export type UserReducerInitialStateType = {
   users: Array<UserType>
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
   followingInProgress: Array<number>
}

// ** Начальное значение, переменные, то, с чем работает редьюсер
const initialState: UserReducerInitialStateType = {
   users: [],
   pageSize: 10,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: true,
   followingInProgress: [],
}

// ** Редьюсер, в который нужно передать стэйт той части логики, с которой он работает. Так же принимает action, типизация которого в редакс-сторе, а возвращать редьюсер должен то, с чем работал и то, что принял на входе. 
export const usersReducer = (state: UsersStateType = initialState, action: AppActionsTypes): UsersStateType => {
   // ** Здесь нужно добавить ключи для свойства type объекта action.
   // ** Проработать для инструкции switch каждый case, с которым будет работать редьюсер, в аргумент case нужно передать нужный type. Внутри case описать код.
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(i => {
               if (i.id === action.userId) {
                  return { ...i, followed: true }
               }
               return i;
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(i => {
               if (i.id === action.userId) {
                  return { ...i, followed: false }
               }
               return i;
            })
         }
      case SET_USERS:
         return { ...state, users: action.users }
      case SET_CURRENT_PAGE: {
         return { ...state, currentPage: action.currentPage }
      }
      case SET_TOTAL_USERS_COUNT: {
         return {
            ...state,
            totalUsersCount: action.totalCount
         }
      }
      case TOGGLE_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.isFetching
         }
      }
      case TOGGLE_IS_FOLLOWING_PROGRESS: {
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id !== action.userId)
         }
      }
      default:
         return state;
   }
}

// ** Action Creator'ы, которые принимают объект со свойством type и ключом-строкой, в которой описано специальное действие. Если нужно, то можно добавить ещё какие-нибудь переменные в этот объект, а в функцию аргумент.
export const followSuccess = (userId: number) => ({ type: FOLLOW, userId } as const)
export const unfollowSuccess = (userId: number) => ({ type: UNFOLLOW, userId } as const)
export const setUsers = (users: Array<UserType>) => ({ type: SET_USERS, users } as const)
export const setUserPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const)
export const setTotalUsersCount = (totalCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalCount } as const)
export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const)

// ** Thunk-function - это функция, которая внутри себя диспатчит другие(обычные) экшоны. Делает асинхронную работу.
// ** Thunk creator - это функция, которая может, что-то принимать и возращает thunk'y.
export const getUsersTC = (currentPage: number, pageSize: number): AppThunkType => {
   return (dispatch) => {
      dispatch(toggleIsFetching(true))
      usersAPI.getUsers(currentPage, pageSize).then((data) => {
         dispatch(toggleIsFetching(false))
         dispatch(setUsers(data.items))
         dispatch(setTotalUsersCount(data.totalCount))
      })
   }
}

export const followTC = (userId: number): AppThunkType => {
   return (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId))
      usersAPI.follow(userId)
         .then((data) => {
            if (data.data.resultCode === 0) {
               dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
         })
   }
}

export const unfollowTC = (userId: number): AppThunkType => {
   return (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId))
      usersAPI.unfollow(userId)
         .then((data) => {
            if (data.data.resultCode === 0) {
               dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
         })
   }
}