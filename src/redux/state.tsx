export type MessageType = {
   id: string
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

export type MyPostPropsType = {
   newPostText: string
   posts: Array<PostType>
   dispatch: (action: ActionsTypes) => void
}

export type ProfilePageType = {
   newPostText: string
   posts: Array<PostType>
}

export type DialogPageType = {
   dialogData: Array<DialogType>
   messages: Array<MessageType>
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
   newPostText: string
   state: ProfilePageType
   dispatch: (action: ActionsTypes) => void
}

export type DialogsLocalStateType = {
   state: DialogPageType
}

export type AddPostActionType = {
   type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
   type: 'UPDATE-NEW-POST-TEXT'
   newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

export type StoreType = {
   _state: RootStateType
   addPost: () => void
   updateNewPostText: (newText: string) => void
   _callSubscriber: (_state: RootStateType) => void
   subscriber: (observer: (_state: RootStateType) => void) => void
   getState: () => RootStateType
   dispatch: (action: ActionsTypes) => void
}

export type PropsType = {
   store: StoreType
   dispatch: (action: ActionsTypes) => void
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
         messages: [
            { id: '1', message: "Hi!" },
            { id: '2', message: "How are you?" },
            { id: '3', message: "Yo!" },
            { id: '4', message: "Salam!" },
            { id: '5', message: "Hello!!" },
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
   addPost() {
      const newPost: PostType = {
         id: new Date().getTime(),
         message: this._state.profilePage.newPostText,
         likecount: '0',
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
   },
   updateNewPostText(newText: string) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
   },
   subscriber(observer) {
      this._callSubscriber = observer;
   },
   getState() {
      return this._state
   },
   dispatch(action) {
      if (action.type === 'ADD-POST') {
         const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likecount: '0',
         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state);
      } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state);
      }
   },
}

export default store;


