import * as React from 'react';
import { Store } from 'redux';
import { ActionsTypes } from './redux/old-redux';
import store from './redux/store';
import oldStore, { ProviderPropsType } from './redux/store';


const StoreContext = React.createContext(store);

export const Provider = (props: ProviderPropsType) => {
   return <StoreContext.Provider value={props.store}>
      {props.children}
   </StoreContext.Provider>
}

export default StoreContext;
