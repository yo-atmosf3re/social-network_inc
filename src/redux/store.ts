import { ReactNode } from "react"

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
}

export type MyPostPropsType = {
   newPostText: string
   posts: Array<PostType>
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
}

export type DialogsContainerType = {
}

export type DialogsLocalStateType = {
   addNewMessage: () => void
   onNewMessageChange: (text: string) => void
   dialogsPage: DialogPageType
}

export type StoreType = {
   _state: RootStateType
   _callSubscriber: (_state: RootStateType) => void
   subscriber: (observer: (_state: RootStateType) => void) => void
   getState: () => RootStateType
}

export type PropsType = {
   oldStore: StoreType
}

export type ProviderPropsType = {
   children: ReactNode
   store: StoreType
}



