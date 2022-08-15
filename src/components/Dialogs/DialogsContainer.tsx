import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addNewMessageActionCreator, DialogsState, initialStateType, updateNewMessageBodyActionCreator } from "../../redux/dialogsPage-reducer";
import { AppStateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type MapDispatchToPropsType = {
   addNewMessage: () => void
   onNewMessageChange: (text: string) => void
}

export type DialogsPropsType = MapDispatchToPropsType & initialStateType

let mapStateToProps = (state: AppStateType): initialStateType => ({ dialogsPage: state.dialogsPage })
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;