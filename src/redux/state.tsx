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

export type PostType = {
   id: number
   message: string
   likecount: string
}

export type ProfilePageType = {
   addPost: (postMessage: string) => void;
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
   // addPost: (postMessage: string) => void
}

export type RootStatePropsType = {
   addPost: (postMessage: string) => void
   state: RootStateType
}

export type ProfileLocalStateType = {
   addPost: (postMessage: string) => void
   state: ProfilePageType
}

export type DialogsLocalStateType = {
   state: DialogPageType
}

export let state: RootStateType = {
   profilePage: {
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
   ]
}

export const addPost = (postMessage: string) => {
   const newPost: PostType = {
      id: new Date().getTime(),
      message: postMessage,
      likecount: '0',
   };
   state.profilePage.posts.push(newPost);
}

export default state;