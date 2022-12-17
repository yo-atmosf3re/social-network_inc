import { initialStateType } from "../../redux/dialogsPage-reducer"
import { DialogPageType } from "../../redux/store"

export type MapDispatchToPropsType = {
   addNewMessage: () => void
   onNewMessageChange: (text: string) => void
}
export type MapStateToPropsType = { dialogsPage: DialogPageType }
export type DialogsPropsType = MapDispatchToPropsType & initialStateType