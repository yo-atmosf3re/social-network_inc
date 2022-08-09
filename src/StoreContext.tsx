import * as React from 'react';
import store from './redux/store';

const StoreContext = React.createContext(store)

export default StoreContext;