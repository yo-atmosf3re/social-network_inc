import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { addNewMessageAC, updateNewMessageBodyAC } from "../../redux/dialogsPage-reducer";
import { AppStateType } from "../../redux/redux-store";
import { selectDialogsPage } from "../../redux/selectors/dialogs-selectors";
import { Dialogs } from "./Dialogs";
import { MapDispatchToPropsType, MapStateToPropsType } from "./Dialogs.types";

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
   dialogsPage: selectDialogsPage(state)
})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      addNewMessage: () => dispatch(addNewMessageAC()),
      onNewMessageChange: (text: string) => dispatch(updateNewMessageBodyAC(text)),
   }
}

export const DialogsContainer = compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)
   (Dialogs);