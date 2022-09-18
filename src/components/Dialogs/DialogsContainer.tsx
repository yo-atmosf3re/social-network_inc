import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dispatch } from "redux";
import { addNewMessageActionCreator, DialogsState, initialStateType, updateNewMessageBodyActionCreator } from "../../redux/dialogsPage-reducer";
import { AppStateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type MapDispatchToPropsType = {
   addNewMessage: () => void
   onNewMessageChange: (text: string) => void
}

export type DialogsPropsType = MapDispatchToPropsType & initialStateType

let mapStateToProps = (state: AppStateType): initialStateType => ({ dialogsPage: state.dialogsPage, isAuth: state.auth.isAuth })
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      addNewMessage: () => {
         dispatch(addNewMessageActionCreator())
      },
      onNewMessageChange: (text: string) => {
         dispatch(updateNewMessageBodyActionCreator(text))
      },
   }
}

let AuthRedirectComponent = (props: DialogsPropsType) => {
   if (!props.isAuth) return <Navigate to={'/login'} />
   return <Dialogs {...props} />
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;