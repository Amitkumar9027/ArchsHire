import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Signup from './components/Login&Signup/Signup';
import Login from './components/Login&Signup/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <Router>
    <Navbar isLoggedIn={isLoggedIn}/>

    <Routes>
      < Route path='/' element={<Home/>}/>
      < Route path='/About' element={<About/>}/>
      < Route path='/Contacts' element={<Contacts/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
