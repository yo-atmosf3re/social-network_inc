import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DialogItemType } from './components/Dialogs/DialogItem/DialogItem';
import { MessageType } from './components/Dialogs/Message/Message';
import { PostPropsType } from './components/Profile/MyPosts/Post/Post';
import { state, StateType } from './redux/state';



export type PostsPropsType = {
  state: Array<PostPropsType>
}

export type AllPropsType = {
  // posts: Array<PostPropsType>
  // dialogData: Array<DialogItemType>
  // messages: Array<MessageType>
  state: StateType
}

export type AllDialogsPropsType = {
  dialogData: Array<DialogItemType>
  messages: Array<MessageType>
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
