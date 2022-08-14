import { combineReducers, configureStore } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { dialogsPageReducer } from "./dialogsPage-reducer";
import { profilePageReducer } from "./profilePage-reducer";
import sidebarReducer from "./sidebar-reducer";
import { StoreType } from "./store";

export let store = configureStore({
   reducer: {
      profilePage: profilePageReducer,
      dialogsPage: dialogsPageReducer,
      sidebar: sidebarReducer,
   }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// let reducers = combineReducers({
//    profilePage: profilePageReducer,
//    dialogsPage: dialogsPageReducer,
//    sidebar: sidebarReducer,
// })

// let store = configureStore(reducers)

// export default store;
