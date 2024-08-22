import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Login from './components/login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/adminlogin' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
