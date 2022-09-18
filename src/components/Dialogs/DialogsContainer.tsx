import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dispatch } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { addNewMessageActionCreator, initialStateType, updateNewMessageBodyActionCreator } from "../../redux/dialogsPage-reducer";
import { AppStateType } from "../../redux/redux-store";
import { DialogPageType } from "../../redux/store";
import Dialogs from "./Dialogs";

type MapDispatchToPropsType = {
   addNewMessage: () => void
   onNewMessageChange: (text: string) => void
}
type MapStateToPropsType = { dialogsPage: DialogPageType }
export type DialogsPropsType = MapDispatchToPropsType & initialStateType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({ dialogsPage: state.dialogsPage })
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

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default DialogsContainer;