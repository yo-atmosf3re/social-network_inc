import { Dispatch } from 'redux';
import { authAPI } from './../api/Api';
import { getAuthUserData } from './auth-reducer';
import { AppActionsTypes, AppThunkType } from "./redux-store";

type AppReducerInitialStateType = {
   initialized: boolean
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState: AppReducerInitialStateType = {
   initialized: false,
}

export const appReducer = (state: AppReducerInitialStateType = initialState, action: AppActionsTypes): AppReducerInitialStateType => {
   switch (action.type) {
      case INITIALIZED_SUCCESS: {
         return {
            ...state,
            initialized: true,
         }
      }
      default: return state
   }
}

export const initilizedSuccessAC = () => ({ type: INITIALIZED_SUCCESS } as const)

export const initilizeAppTC = (): AppThunkType => async (dispatch) => {
   try {
      const result = await dispatch(getAuthUserData())
      console.log(result)
      dispatch(initilizedSuccessAC())
   } catch (error) {
      console.log(error)
   }
}
