import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Aboutpage from './pages/Aboutpage'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about-us' element={<Aboutpage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
