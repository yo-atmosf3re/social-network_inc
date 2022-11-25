import * as React from "react";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import oldStore from "./redux/store";
import { store } from "./redux/redux-store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <BrowserRouter>
      <Provider store={store}>
         <App oldStore={oldStore} />
      </Provider>
   </BrowserRouter>
)

reportWebVitals();
