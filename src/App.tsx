import * as React from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { DialogsContainer } from './components/Dialogs';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from './redux/redux-store';
import { useEffect } from 'react';
import { initilizeAppTC } from './redux/app-reducer';
import { Preloader } from './components/common/Preloader';

const App = () => {

  const dispatch = useDispatch<AppDispatch>()
  const { login } = useAppSelector(state => state.auth)
  const { initialized } = useAppSelector(state => state.app)
  const navigate = useNavigate()

  useEffect(() => {
    !login && navigate('/login')
  }, [login])

  useEffect(() => {
    dispatch(initilizeAppTC())
  }, [login])

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      {
        initialized ?
          <>
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
          </>
          :
          <Preloader />
      }
    </div>
  );
}

export default App;