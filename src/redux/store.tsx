
import dialogsPageReducer, { addNewMessageActionCreator, updateNewMessageBodyActionCreator } from "./dialogsPage-reducer"
import profilePageReducer, { addPostActionCreator, updateNewTextActionCreator } from "./profilePage-reducer"
import sidebarReducer from "./sidebar-reducer"

export type MessageType = {
   id: number
   message: string
}

export type DialogType = {
   id: string
   name: string
}

export type DialogItemType = {
   name: string,
   id: string
}

export type NavbarPropsType = {
   state: SidebarItemType[]
}

export type PostType = {
   id: number
   message: string
   likecount: string
}

export type MyPostsContainerPropsType = {
   // newPostText: string
   // posts: Array<PostType>
   // dispatch: (action: ActionsTypes) => void
   // store: StoreType
}

export type MyPostPropsType = {
   newPostText: string
   posts: Array<PostType>
   // dispatch?: (action: ActionsTypes) => void
   addPost: () => void
   updateNewPostText: (value: string) => void

}

export type ProfilePageType = {

   newPostText: string
   posts: Array<PostType>
}

export type DialogPageType = {
   dialogData: Array<DialogType>
   messages: Array<MessageType>
   newMessageBody: string
}

export type SidebarItemType = {
   id: number
   name: string
}

export type SidebarType = {
   sidebar: Array<SidebarItemType>
}

export type RootStateType = {
   profilePage: ProfilePageType
   dialogsPage: DialogPageType
   sidebar: Array<SidebarItemType>
}

export type RootStatePropsType = {
   addPost: (postMessage: string) => void
   state: RootStateType
   updateNewPostText: (newText: string) => void
}

export type ProfileLocalStateType = {
   // store: StoreType
   // newPostText: string
   // state: ProfilePageType
   // dispatch: (action: ActionsTypes) => void
}

export type DialogsContainerType = {
   // store: StoreType
}

export type DialogsLocalStateType = {
   store: StoreType
   addNewMessage: () => void
   onNewMessageChange: (text: string) => void
   dialogsPage: DialogPageType
   // state: DialogPageType
   // dispatch: (action: ActionsTypes) => void
   // newMessageBody: string
}

export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewTextActionCreator> | ReturnType<typeof addNewMessageActionCreator> | ReturnType<typeof updateNewMessageBodyActionCreator>

export type StoreType = {
   _state: RootStateType
   _callSubscriber: (_state: RootStateType) => void
   subscriber: (observer: (_state: RootStateType) => void) => void
   getState: () => RootStateType
   dispatch: (action: ActionsTypes) => void
}

export type PropsType = {
   store: StoreType
   // dispatch: (action: ActionsTypes) => void
}

export let store: StoreType = {
   _state: {
      profilePage: {
         newPostText: '',
         posts: [
            { id: 1, message: 'Hi, how are you?', likecount: '♥ 20' },
            { id: 2, message: "It's my first post", likecount: '♥ 14' },
            { id: 3, message: "It's my second post", likecount: '♥ 0' },
         ],
      },
      dialogsPage: {
         newMessageBody: '',
         messages: [
            { id: 1, message: "Hi!" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Yo!" },
            { id: 4, message: "Salam!" },
            { id: 5, message: "Hello!!" },
         ],
         dialogData: [
            { id: "1", name: 'Alex' },
            { id: "2", name: 'Ivan' },
            { id: "3", name: 'Jon' },
            { id: "4", name: 'Andrey' },
            { id: "5", name: 'Mark' },
            { id: "6", name: 'Elvis' },
         ],
      },
      sidebar: [
         { id: 1, name: 'Alex' },
         { id: 2, name: 'Steve' },
         { id: 3, name: 'Jon' },
         { id: 4, name: 'Oleg' },
      ],
   },
   _callSubscriber(_state: RootStateType) {
      console.log('State changed');
   },
   subscriber(observer) {
      this._callSubscriber = observer;
   },
   getState() {
      return this._state
   },
   dispatch(action) {
      this._state.profilePage = profilePageReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)
      this._callSubscriber(this._state);
   },
}

export default store;


