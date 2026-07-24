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
import RequestDemoPage from './pages/RequestDemoPage'
import ThankyouPage from './pages/ThankyouPage'
import MainLayout from './layouts/MainLayout'
import DemoLayout from './layouts/DemoLayout'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
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
        </Route>
        

        <Route element={<DemoLayout/>}>
          <Route path='/request-demo' element={<RequestDemoPage/>}/>
          <Route path='/thankyou' element={<ThankyouPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
