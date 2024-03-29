import * as React from 'react';
import { store } from './redux/redux-store';
import { ProviderPropsType } from './redux/store';


const StoreContext = React.createContext(store);

export const Provider = (props: ProviderPropsType) => {
   return <StoreContext.Provider value={store}>
      {props.children}
   </StoreContext.Provider>
}

export default StoreContext;
