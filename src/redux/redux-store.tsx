import { combineReducers, configureStore } from "@reduxjs/toolkit";
import React from "react";
import dialogsPageReducer from "./dialogsPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers: any = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
   sidebar: sidebarReducer,
})

let store = configureStore(reducers)

export default store;
