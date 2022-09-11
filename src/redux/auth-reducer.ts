import { usersAPI } from "../api/Api";
import { AppActionsTypes, AppThunkType } from "./redux-store";

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
export const authReducer = (state: AuthStateType = initialState, action: AppActionsTypes): AuthStateType => {
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

export const setAuthUserDataSuccess = (userId: null, email: null, login: null) => ({ type: SET_USER_DATA, data: { userId, email, login } } as const)

export const setAuthUserDataTC = (): AppThunkType => {
   return (dispatch) => {
      usersAPI.chekAuth()
         .then((data) => {
            if (data.resultCode === 0) {
               let { id, email, login } = data.data;
               dispatch(setAuthUserDataSuccess(id, email, login))
            }
         })
   }
}

