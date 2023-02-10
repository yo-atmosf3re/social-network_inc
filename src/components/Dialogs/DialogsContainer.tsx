import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { addNewMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsPage-reducer";
import { AppStateType } from "../../redux/redux-store";
import { selectDialogsPage } from "../../redux/selectors/dialogs-selectors";
import { Dialogs } from "./Dialogs";
import { MapDispatchToPropsType, MapStateToPropsType } from "./Dialogs.types";

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
   dialogsPage: selectDialogsPage(state)
})
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