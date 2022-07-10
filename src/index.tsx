import * as React from "react";
import reportWebVitals from './reportWebVitals';
import state, { addPost, RootStateType, updateNewPostText } from './redux/state';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";

const root = ReactDOM.create(
   document.getElementById('root') as HTMLElement);

let renderEntireTree = (state: RootStateType) => {
   root.render(
      <React.StrictMode>
         <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
         </BrowserRouter>
      </React.StrictMode>
   );
}

// const root = ReactDOM.createPortal(document.getElementById('root') as HTMLElement);
// export let rerenderEntireTree = (state: RootStateType) => {
//    root.render(
//       <React.StrictMode>
//          <BrowserRouter>
//             <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
//          </BrowserRouter>
//       </React.StrictMode>
//    );
// }

rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
