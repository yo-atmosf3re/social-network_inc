import { ActionsTypes } from "./redux-store";

// Константа для AC
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

// Типизация начального стэйта, который должен возвращать сам редьюсер
export type UsersStateType = typeof initialState

// Начальное значение, переменные, то, с чем работает редьюсер
const initialState: initialStateType = {
   users: [],
   pageSize: 10,
   totalUsersCount: 50,
   currentPage: 1,
}

// Типизация массива
export type UserType = {
   photos: { small?: string | null, large?: string | null }
   id: number
   followed: boolean
   name: string
   status: string
   // location: { city: string, country: string }
}

// Типизация начального стэйта
export type initialStateType = {
   users: Array<UserType>
   pageSize: number
   totalUsersCount: number
   currentPage: number
}

// Редьюсер, в который нужно передать стэйт той части логики, с которой он работает. Так же принимает action, типизация которого в редакс-сторе, а возвращать редьюсер должен то, с чем работал и то, что принял на входе. 
export const usersReducer = (state: UsersStateType = initialState, action: ActionsTypes): UsersStateType => {
   // Здесь нужно добавить ключи для свойства type объекта action.
   // Проработать для инструкции switch каждый case, с которым будет работать редьюсер, в аргумент case нужно передать нужный type. Внутри case описать код.
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
         return { ...state, users: [...state.users, ...action.users] }

      case SET_CURRENT_PAGE: {
         return { ...state, currentPage: action.currentPage }

      }

      default:
         return state;
   }
}

// Action Creator'ы, которые принимают объект со свойством type и ключом-строкой, в которой описано специальное действие. Если нужно, то можно добавить ещё какие-нибудь ключи-значения в этот объект.
export const followAC = (userId: number) => ({ type: FOLLOW, userId } as const)
export const unfollowAC = (userId: number) => ({ type: UNFOLLOW, userId } as const)
export const setUsersAC = (users: Array<UserType>) => ({ type: SET_USERS, users } as const)
export const setCurrentPageAC = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const)