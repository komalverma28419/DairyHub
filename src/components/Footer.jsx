import React from 'react'
import logo from "../assets/images/logo.png"
import {NavLink } from 'react-router-dom'
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md'
import ShareButtons from './shared/ShareButtons'


const Footer = () => {

 

  return (
    <footer className='max-w-7xl mx-auto py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-[#FCFCFC]'>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 items-start text-gray-700 text-sm lg:text-base'>

        <div className='flex flex-col gap-2 '>
          <NavLink to="/"><img src={logo} alt="logo"  className='h-14 w-auto'/></NavLink>
          <p className='leading-7 font-medium '>DairyHub is a modern SaaS platform that simplifies subscription management and delivery operations for dairy businesses.</p>
        </div>

        <div className='flex flex-col font-medium gap-3 ml-0 md:ml-10 mt-4'>
          <h4 className="text-lg lg:text-xl font-semibold text-[#313131] mb-4">Company</h4>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/platform">Platform</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className='flex flex-col font-medium gap-3 mt-4'>
          <h4 className='text-lg lg:text-xl font-semibold text-[#313131] mb-4'>Support</h4>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/terms-and-condition">Terms & Condition</NavLink>
        </div>

        <div className='flex flex-col font-medium gap-3 mt-4'>
          <h4 className='text-lg lg:text-xl font-semibold text-[#313131] mb-4'>Address</h4>
    
          <div className='flex gap-3 items-center'>
            <MdLocationOn className='shrink-0 text-[#2F75FD] text-xl'/>
            <address className='not-italic'>Noida Uttar Pradesh <br />201304</address>
          </div>
          <div className='flex gap-3 items-center'>
            <MdEmail className='shrink-0 text-[#2F75FD] text-xl'/>
            <a href="mailto:hello@swadeshivip.com"className="hover:text-[#2F75FD] transition-colors">
              hello@swadeip.com
            </a>
          </div>
          <div className='flex gap-3 items-center'>
            <MdPhone className='shrink-0 text-[#2F75FD] text-xl'/>
            <a href="tel:8826182800"className="hover:text-[#2F75FD] transition-colors">
              8826182800
            </a>
          </div>
        </div>
      </div>

      {/* bottom */}
      <hr className='text-[#CEE3FF] my-6'/>
      
      <div className='flex items-center justify-between lg:mt-12 text-sm lg:text-base'>
        <p className='text-gray-600 '>@ 2026 Company Name, Inc. All rights reserved.</p>
       <ShareButtons/>
      </div>
      </div>
    </footer>
  )
}

export default Footer
