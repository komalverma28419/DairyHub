import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Aboutpage from './pages/Aboutpage'
import PlatformPage from './pages/PlatformPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import BlogDetailPage from './pages/BlogDetailPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsAndConditionPage from './pages/TermsAndConditionPage'



const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about-us' element={<Aboutpage/>}/>
      <Route path='/platform' element={<PlatformPage/>}>
          <Route path='milk-delivery' element={<PlatformPage/>}/>
          <Route path='collection-partner' element={<PlatformPage/>}/>
          <Route path='dairy-farmer' element={<PlatformPage/>}/>
          <Route path='collection-centre' element={<PlatformPage/>}/>
      </Route>
      <Route path='/blogs' element={<BlogPage/>}/>
      <Route path='/blogs/:slug' element={<BlogDetailPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicyPage/>}/>
      <Route path='/terms-and-conditions' element={<TermsAndConditionPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
