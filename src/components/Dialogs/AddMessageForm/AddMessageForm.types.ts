export type AddMessageTextareaPropsType = {
   messagesElements: JSX.Element[]
   newMessageBody: string
   addNewMessage: () => void
   onNewMessageChange: (text: string) => void
}