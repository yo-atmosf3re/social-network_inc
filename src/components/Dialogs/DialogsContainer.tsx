import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { addNewMessageActionCreator, initialStateType, updateNewMessageBodyActionCreator } from "../../redux/dialogsPage-reducer";
import { AppStateType } from "../../redux/redux-store";
import { DialogPageType } from "../../redux/store";
import { Dialogs } from "./Dialogs";
import { MapDispatchToPropsType, MapStateToPropsType } from "./Dialogs.types";

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({ dialogsPage: state.dialogsPage })
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      addNewMessage: () => dispatch(addNewMessageActionCreator()),
      onNewMessageChange: (text: string) => dispatch(updateNewMessageBodyActionCreator(text)),
   }
}

export const DialogsContainer = compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)
   (Dialogs);