import { ActionsTypes } from "./redux-store";

// ? Типизация инишл стэйта
export type AuthStateType = typeof initialState;

// * Константы для AC
const SET_USER_DATA = 'SET_USER_DATA';

// ? Инициализационный стэйт
let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
}

// * Сам редьюсер, принимает часть стэйта, с которым будет работать, принимает экшоны, типизация которых в редакс-сторе. Возвращает то с чем работал.
export const authReducer = (state: AuthStateType = initialState, action: ActionsTypes): AuthStateType => {
   switch (action.type) {
      case SET_USER_DATA: {
         // debugger
         return {
            ...state,
            ...action.data,
            isAuth: true,
         }
      }
      default: return state
   }
}

export const setAuthUserData = (userId: null, email: null, login: null) => ({ type: SET_USER_DATA, data: { userId, email, login } } as const)
// export const blabla2 = () => ({ type: someAction } as const)
// export const blabla3 = () => ({ type: someAction } as const)

