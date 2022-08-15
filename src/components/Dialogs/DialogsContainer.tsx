import React from "react";
import { connect } from "react-redux";
import { addNewMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";

type DialogsDispatchType = {

}

let mapStateToProps = (state: any) => ({ dialogsPage: state.dialogsPage })
let mapDispatchToProps = (dispatch: any) => {
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