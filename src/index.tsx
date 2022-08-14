import * as React from "react";
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";
import oldStore, { RootStateType } from "./redux/store";
import StoreContext, { Provider } from "./StoreContext";
import { store } from "./redux/redux-store";

let rerenderEntireTree = () => {
   debugger
   ReactDOM.render(
      <React.StrictMode>

         <BrowserRouter>
            <Provider store={store}>
               <App oldStore={oldStore} />
            </Provider>
         </BrowserRouter>
      </React.StrictMode>, document.getElementById('root')
   );
}

rerenderEntireTree();
store.subscriber(() => {
   rerenderEntireTree();
})

// rerenderEntireTree(store.getState());
// store.subscribe(() => {
//    let state = store.getState();
//    rerenderEntireTree(state)
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// store.subscriber(rerenderEntireTree);
// rerenderEntireTree(store.getState());
