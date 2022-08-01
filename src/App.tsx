import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import { PropsType } from './redux/state';

const App: React.FC<PropsType> = (props) => {
  const state = props.store.getState();

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={state.sidebar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile
            state={state.profilePage}
            newPostText={state.profilePage.newPostText}
            dispatch={props.dispatch.bind(props.store)} />} />
          <Route path='/dialogs/*' element={<Dialogs
            state={state.dialogsPage} newMessageText={state.dialogsPage.newMessageText} dispatch={props.dispatch.bind(props.store)} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;