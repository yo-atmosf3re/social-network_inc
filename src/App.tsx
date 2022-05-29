import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllPropsType } from '.';



const App = (props: AllPropsType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile posts={props.posts} />} />
            <Route path='/dialogs/*' element={<Dialogs dialogData={props.dialogData} messages={props.messages} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
