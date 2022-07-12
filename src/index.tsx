import * as React from "react";
import reportWebVitals from './reportWebVitals';
import state, { addPost, RootStateType, subscribe, updateNewPostText } from './redux/state';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";

let rerenderEntireTree = (state: RootStateType) => {
   ReactDOM.render(
      <React.StrictMode>
         <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
         </BrowserRouter>
      </React.StrictMode>, document.getElementById('root')
   );
}

rerenderEntireTree(state);
rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
