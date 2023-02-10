import { AppStateType } from './../redux-store';

export const selectHeaderAutorized = (state: AppStateType) => state.auth.isAuth

export const selectLogin = (state: AppStateType) => state.auth.login