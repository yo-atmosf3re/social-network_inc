import { applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { authReducer, setAuthUserDataSuccess } from "./auth-reducer";
import { addNewMessageAC, dialogsPageReducer, updateNewMessageBodyAC } from "./dialogsPage-reducer";
import {
   addPostAC, deletePostAC, profilePageReducer, setStatusAC, setUserProfileAC,
   updateNewTextAC
} from "./profilePage-reducer";
import { setUserPageAC, followSuccessAC, setUsersAC, unfollowSuccessAC, usersReducer, setTotalUsersCountAC, toggleIsFetchingAC, toggleFollowingProgressAC } from "./users-reducer";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { legacy_createStore as createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { appReducer, initilizedSuccessAC } from "./app-reducer";

export type AppActionsTypes = ReturnType<typeof addPostAC>
   | ReturnType<typeof updateNewTextAC>
   | ReturnType<typeof addNewMessageAC> | ReturnType<typeof updateNewMessageBodyAC>
   | ReturnType<typeof followSuccessAC> | ReturnType<typeof unfollowSuccessAC>
   | ReturnType<typeof setUsersAC> | ReturnType<typeof setUserPageAC>
   | ReturnType<typeof setTotalUsersCountAC> | ReturnType<typeof toggleIsFetchingAC>
   | ReturnType<typeof setUserProfileAC> | ReturnType<typeof setAuthUserDataSuccess>
   | ReturnType<typeof toggleFollowingProgressAC> | ReturnType<typeof setStatusAC>
   | ReturnType<typeof initilizedSuccessAC> | ReturnType<typeof deletePostAC>;

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsTypes>
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

export const rootReducer = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
})

// Общая типизация для thunk, которая диспатчит другой thunk. Это можно использовать в любой санке, теперь типизировать диспатч, который приходит в санк-креатор, не нужно. Просто вставляем такую типизацию в каждую санку.
export type AppThunkType<ReturnType = void> = ThunkAction<
   ReturnType,
   AppStateType,
   unknown,
   AppActionsTypes
>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;