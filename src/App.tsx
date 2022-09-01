import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { PropsType } from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersAPIComponent from './components/Users/UsersAPIComponent';
import UsersContainer from './components/Users/UsersContainer';

const App: React.FC<PropsType> = (props) => {
  const state = props.oldStore.getState();

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={state.sidebar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile
          />} />
          <Route path='/dialogs/*' element={<DialogsContainer
          />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;