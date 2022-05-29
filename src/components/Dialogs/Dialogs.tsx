import { AllDialogsPropsType } from "../..";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = (props: AllDialogsPropsType) => {
   let dialogsElements = props.dialogData
      .map(d => <DialogItem name={d.name} id={d.id} />)

   let messagesElements = props.messages
      .map(m => <Message message={m.message} id={m.id} />)

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div >
   )
}

export default Dialogs;