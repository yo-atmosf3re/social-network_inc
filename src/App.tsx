import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import state, { PropsType, RootStatePropsType } from './redux/state';

const App = (props: PropsType) => {
  const state = props.store.getState();
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
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