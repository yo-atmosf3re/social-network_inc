import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DialogItemType } from './components/Dialogs/DialogItem/DialogItem';
import { MessageType } from './components/Dialogs/Message/Message';
import { PostPropsType } from './components/Profile/MyPosts/Post/Post';

export let posts: Array<PostPropsType> = [
  { id: 1, message: 'Hi, how are you?', likecount: '♥ 20' },
  { id: 2, message: "It's my first post", likecount: '♥ 14' },
  { id: 3, message: "It's my second post", likecount: '♥ 0' },
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App posts={posts} />
  </React.StrictMode>
);

export type PostsPropsType = {
  posts: Array<PostPropsType>
}

export let dialogData: Array<DialogItemType> = [
  { id: "1", name: 'Alex' },
  { id: "2", name: 'Ivan' },
  { id: "3", name: 'Jon' },
  { id: "4", name: 'Andrey' },
  { id: "5", name: 'Mark' },
  { id: "6", name: 'Elvis' },
]

export let messages: Array<MessageType> = [
  { id: '1', message: "Hi!" },
  { id: '2', message: "How are you?" },
  { id: '3', message: "Yo!" },
  { id: '4', message: "Salam!" },
  { id: '5', message: "Hello!!" },
]



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
