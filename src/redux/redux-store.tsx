import { combineReducers, createStore } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { addNewMessageActionCreator, dialogsPageReducer, updateNewMessageBodyActionCreator } from "./dialogsPage-reducer";
import { addPostActionCreator, profilePageReducer, updateNewTextActionCreator } from "./profilePage-reducer";
import { setCurrentPageAC, followAC, setUsersAC, unfollowAC, usersReducer } from "./users-reducer";

export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewTextActionCreator> | ReturnType<typeof addNewMessageActionCreator> | ReturnType<typeof updateNewMessageBodyActionCreator> | ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC>

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

export const rootReducer = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
   usersPage: usersReducer,
})

export let store = createStore(rootReducer);