// import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
import BackgroundSelector from './components/backgroundselector/BackgroundSelector';
import Profile from './pages/profilepage/Profile'

function App() {
  const {authUser} = useAuthContext();
  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
      
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"}/>} />
          <Route path='/login' element={authUser ? <Navigate to="/"/> :<Login />} />
          <Route path='/signup' element={authUser ? <Navigate to="/"/> : <SignUp />} />
          <Route path='/profile' element={authUser ? <Profile/> : <Navigate to={"/login"}/>}/>
        </Routes>
        <Toaster/>
      </div>
    </>
  )
}

export default App