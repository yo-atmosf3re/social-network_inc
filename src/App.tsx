import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { PropsType } from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App: React.FC<PropsType> = (props) => {
  const state = props.store.getState();

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
        </Routes>
      </div>
    </div>
  );
}

export default App;