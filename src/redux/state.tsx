import { DialogItemType } from "../components/Dialogs/DialogItem/DialogItem"
import { MessageType } from "../components/Dialogs/Message/Message"
import { PostPropsType } from "../components/Profile/MyPosts/Post/Post"

export type StateType = {
   profilePage: ProfilePageType
   dialogsPage: DialogsPageType
}

export type ProfilePageType = {
   posts: Array<PostPropsType>

}

export type DialogsPageType = {
   messages: Array<MessageType>
   dialogData: Array<DialogItemType>
}

export let state: StateType = {
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

}