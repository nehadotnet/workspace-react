
import './App.css'
import Login from "./features/auth/Login";

import { Route, Routes } from 'react-router'
import UserLogin from "./features/auth/UserLogin"
import Dashboard from './features/dashboard/Dashboard'
import MyRequest from './features/ticketing/MyRequest';
import MyAction from './features/ticketing/MyAction';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/auth/user-login' element={<UserLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route element={<Dashboard />}>

          <Route path='/ticketing/my-request' element={<MyRequest />} />
          <Route path='/ticketing/my-action' element={<MyAction />} />

        </Route>

      </Routes>
    </>
  )
}

export default App
