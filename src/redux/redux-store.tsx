import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import React from "react";
import dialogsPageReducer from "./dialogsPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import sidebarReducer from "./sidebar-reducer";
import { ActionsTypes } from "./store";

type ReducerType = {
   profilePage: (state: any, action: ActionsTypes) => any
   dialogsPage: (state: any, action: ActionsTypes) => any
   sidebar: (state: any, action: ActionsTypes) => any
}

let reducers: any = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
   sidebar: sidebarReducer,
})

let store = configureStore(reducers)

export default store;
