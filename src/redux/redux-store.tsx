import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { dialogsPageReducer } from "./dialogsPage-reducer";
import { profilePageReducer } from "./profilePage-reducer";
import sidebarReducer from "./sidebar-reducer";
import { StoreType } from "./store";

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

export const rootReducer = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
})

export let store: StoreType = createStore(rootReducer)







// export default store;
