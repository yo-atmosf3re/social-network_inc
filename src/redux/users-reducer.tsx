import { ActionsTypes } from "./redux-store";
import { PostType, ProfilePageType } from "./store";

// Константа для AC
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

// Типизация начального стэйта, который должен возвращать сам редьюсер
export type UsersStateType = typeof initialState

// Начальное значение, переменные, то, с чем работает редьюсер
const initialState = {
   users: [
      { id: 1, followed: true, fullName: 'Alex', status: 'Hello, i am  cat', location: { city: 'Minsk', country: 'Belarus' } },
      { id: 2, followed: false, fullName: 'Dima', status: 'Hello, i am  bear', location: { city: 'Moscow', country: 'Russia' } },
      { id: 3, followed: true, fullName: 'Jon', status: 'Hello, i am  pig', location: { city: 'Kiev', country: 'Ukraine' } },
   ],
}

// Типизация массива
type UserType = {
   id: number
   followed: boolean
   fullName: string
   status: string
   location: { city: string, country: string }
}

// Типизация начального стэйта
export type initialStateType = {
   users: Array<UserType>
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

      default:
         return state;
   }
}

// Action Creator'ы, которые принимают объект со свойством type и ключом-строкой, в которой описано специальное действие. Если нужно, то можно добавить ещё какие-нибудь ключи-значения в этот объект.
export const followAC = (userId: number) => ({ type: FOLLOW, userId } as const)
export const unfollowAC = (userId: number) => ({ type: UNFOLLOW, userId } as const)
export const setUsersAC = (users: Array<UserType>) => ({ type: SET_USERS, users } as const)
