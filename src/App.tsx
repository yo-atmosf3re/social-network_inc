import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { PropsType } from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App: React.FC<PropsType> = (props) => {
  const state = props.oldStore.getState();

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar state={state.sidebar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/:userId' element={<ProfileContainer
          />} />
          <Route path='/profile/' element={<ProfileContainer
          />} />
          <Route path='/dialogs/*' element={<DialogsContainer
          />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;