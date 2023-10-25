import { FaBeer } from 'react-icons/fa';

import './App.css'
import { Home } from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import Topbar from './components/Navbar/Topbar';
// import {Topbar } from './components/Navbar/Topbar';

function App() {

  return (
    <>
     
    <BrowserRouter>
    <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        
      </Routes>
    </BrowserRouter>
    {/* <Home/> */}
    </>
  )
}

export default App
