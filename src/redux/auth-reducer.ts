import { authAPI } from './../api/Api';
import { AppActionsTypes, AppThunkType } from "./redux-store";

// ? Типизация инишл стэйта
type AuthStateType = {
   userId: null | string,
   email: null | string,
   login: null | string,
   isAuth: boolean,
}

// * Константы для AC
const SET_USER_DATA = 'SET_USER_DATA';

// ? Инициализационный стэйт
const initialState: AuthStateType = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
}

// * Сам редьюсер, принимает часть стэйта, с которым будет работать, принимает экшоны, типизация которых в редакс-сторе. Возвращает то с чем работал.
export const authReducer = (state: AuthStateType = initialState, action: AppActionsTypes): AuthStateType => {
   switch (action.type) {
      case SET_USER_DATA: {
         return {
            ...state,
            ...action.data,
            isAuth: true,
         }
      }
      default: return state
   }
}

export const setAuthUserDataSuccess = (userId: null | string, email: null | string, login: null | string, isAuth: boolean) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } } as const)

export const getAuthUserData = (): AppThunkType =>
   (dispatch) => {
      authAPI.me()
         .then((response) => {
            if (response.data.resultCode === 0) {
               const { id, email, login } = response.data.data;
               dispatch(setAuthUserDataSuccess(id, email, login, true))
            }
         })
   }


export const login = (email: string, password: string, rememberMe: boolean): AppThunkType =>
   (dispatch) => {
      authAPI.login(email, password, rememberMe)
         .then(res =>
            dispatch(getAuthUserData())
         )
   }

export const logout = (): AppThunkType =>
   (dispatch) => {
      authAPI.logout()
         .then(res =>
            dispatch(setAuthUserDataSuccess(null, null, null, false))
         )
   }

