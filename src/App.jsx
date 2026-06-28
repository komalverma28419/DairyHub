import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
