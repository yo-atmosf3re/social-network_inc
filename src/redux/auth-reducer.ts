import { Dispatch } from 'redux';
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
         }
      }
      default: return state
   }
}

export const setAuthUserDataSuccess = (userId: null | string, email: null | string, login: null | string, isAuth: boolean,) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } } as const)

// ** try...catch
export const getAuthUserData = (): AppThunkType =>
   async (dispatch) => {
      try {
         const { data } = await authAPI.me()
         dispatch(setAuthUserDataSuccess(data.data.id, data.data.email, data.data.login, true))
         return data
      } catch (error) {
         console.log(error)
      }
   }

export const login = (email: string, password: string, rememberMe: boolean, setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void): AppThunkType => async (dispatch) => {
   try {
      const { data } = await authAPI.login(email, password, rememberMe)
      if (data.resultCode === 0) {
         dispatch(getAuthUserData())
      } else {
         setFieldValue('errorMessage', data.messages.join(''))
      }
   } catch (error) {
      console.log(error)
   }
}

export const logout = (): AppThunkType =>
   async (dispatch) => {
      try {
         const { data } = await authAPI.logout()
         if (data.resultCode === 0) {
            dispatch(setAuthUserDataSuccess(null, null, null, false))
         }
      } catch (error) {
         console.log(error)
      }
   }

