import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import state, { PropsType } from './redux/state';

const App: React.FC<PropsType> = (props) => {
  const state = props.store.getState();
  debugger
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={state.sidebar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile
            state={state.profilePage}
            addPost={props.store.addPost.bind(props.store)}
            newPostText={state.profilePage.newPostText}
            updateNewPostText={props.store.updateNewPostText.bind(props.store)} />} />
          <Route path='/dialogs/*' element={<Dialogs
            state={state.dialogsPage} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;