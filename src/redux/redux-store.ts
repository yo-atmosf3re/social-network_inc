import { AnyAction, applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { authReducer, setAuthUserData } from "./auth-reducer";
import { addNewMessageActionCreator, dialogsPageReducer, updateNewMessageBodyActionCreator } from "./dialogsPage-reducer";
import { addPostActionCreator, profilePageReducer, setUserProfile, updateNewTextActionCreator } from "./profilePage-reducer";
import { setUserPage, follow, setUsers, unfollow, usersReducer, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress } from "./users-reducer";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { legacy_createStore as createStore } from 'redux'

export type AppActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewTextActionCreator> | ReturnType<typeof addNewMessageActionCreator> | ReturnType<typeof updateNewMessageBodyActionCreator> | ReturnType<typeof follow> | ReturnType<typeof unfollow> | ReturnType<typeof setUsers> | ReturnType<typeof setUserPage> | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching> | ReturnType<typeof setUserProfile> | ReturnType<typeof setAuthUserData> | ReturnType<typeof toggleFollowingProgress>;

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsTypes>
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

export const rootReducer = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
   usersPage: usersReducer,
   auth: authReducer,
})

// Общая типизация для thunk, которая диспатчит другой thunk. Это можно использовать в любой санке, теперь типизировать диспатч, который приходит в санк-креатор, не нужно. Просто вставляем такую типизацию в каждую санку.
export type AppThunkType<ReturnType = void> = ThunkAction<
   ReturnType,
   AppStateType,
   unknown,
   AppActionsTypes
>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;