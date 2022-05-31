import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RootStatePropsType, RootStateType } from './redux/state';
import { state } from './redux/state';



const App = (props: RootStateType) => {
  let dialogsState = state.dialogsPage
  let profileState = state.profilePage

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile state={profileState} />} />
            <Route path='/dialogs/*' element={<Dialogs state={dialogsState} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;

// element={<Dialogs dialogData={props.state.dialogsPage.dialogData} messages={props.state.dialogsPage.messages}