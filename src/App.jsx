
import './App.css'
import Login from "./features/auth/Login";

import { Route, Routes } from 'react-router'
import UserLogin from "./features/auth/UserLogin"
import Dashboard from './features/dashboard/Dashboard'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/auth/user-login' element={<UserLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
