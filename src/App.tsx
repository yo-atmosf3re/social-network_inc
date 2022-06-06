import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import { RootStatePropsType } from './redux/state';



const App = (props: RootStatePropsType) => {

  // let dialogsState = state.dialogsPage
  // let profileState = state.profilePage

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile state={props.state.profilePage} />} />
          <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} />} />
          <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} />} />
          <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} />} />
          <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} />} />
          <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} />} />
        </Routes>
      </div>
    </div>
  );
}



export default App;

// element={<Dialogs dialogData={props.state.dialogsPage.dialogData} messages={props.state.dialogsPage.messages}