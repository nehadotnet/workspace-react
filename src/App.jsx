
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router'
import UserLogin from './components/UserLogin'
import Dashboard from './components/Dashboard'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/user-login' element={<UserLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
