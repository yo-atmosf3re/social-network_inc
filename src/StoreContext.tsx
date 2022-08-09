import * as React from 'react';
import store, { ProviderPropsType } from './redux/store';

const StoreContext = React.createContext(store);

export const Provider = (props: ProviderPropsType) => {
   return <StoreContext.Provider value={props.store}>
      {props.children}
   </StoreContext.Provider>
}

export default StoreContext;
