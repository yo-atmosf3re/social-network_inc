import { combineReducers, configureStore } from "@reduxjs/toolkit";
import React from "react";
import { dialogsPageReducer } from "./dialogsPage-reducer";
import { profilePageReducer } from "./profilePage-reducer";
import sidebarReducer from "./sidebar-reducer";
import { StoreType } from "./store";

export default configureStore({
   reducer: {
      profilePage: profilePageReducer,
      dialogsPage: dialogsPageReducer,
      sidebar: sidebarReducer,
   }
})

// let reducers = combineReducers({
//    profilePage: profilePageReducer,
//    dialogsPage: dialogsPageReducer,
//    sidebar: sidebarReducer,
// })

// let store = configureStore(reducers)

// export default store;
