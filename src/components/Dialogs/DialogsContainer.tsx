import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { addNewMessageActionCreator, initialStateType, updateNewMessageBodyActionCreator } from "../../redux/dialogsPage-reducer";
import { AppStateType } from "../../redux/redux-store";
import { DialogPageType } from "../../redux/store";
import Dialogs from "./Dialogs";

type MapDispatchToPropsType = {
   addNewMessage: (newMessageBody: string) => void
   onNewMessageChange: (text: string) => void
}
type MapStateToPropsType = { dialogsPage: DialogPageType }
export type DialogsPropsType = MapDispatchToPropsType & initialStateType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({ dialogsPage: state.dialogsPage })
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      addNewMessage: (newMessageBody: string) => dispatch(addNewMessageActionCreator(newMessageBody)),
      onNewMessageChange: (text: string) => dispatch(updateNewMessageBodyActionCreator(text)),
   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Dialogs);