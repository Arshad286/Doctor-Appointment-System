import './App.css'
import HomePage from './pages/home-page';
import Login from './pages/login';
import Signup from './pages/signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
