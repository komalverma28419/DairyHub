import React from 'react'
import logo from "../assets/images/logo.png"
import {NavLink } from 'react-router-dom'
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md'
import ShareButtons from './shared/ShareButtons'


const Footer = () => {
  const footerLink = [
   { name: "About Us", path: "/about-us"},
   { name: "Platform", path: "/platform"},
   { name: "Blog", path: "/blogs"},
   { name: "Contact", path: "/contact"},
  ]
  const activeClass = ({isActive}) => `${isActive ? "text-primary" : "text-gray-700 hover:text-primary"}`
  const headingClass = "text-lg lg:text-xl font-semibold text-dark mb-4"
  return (
    <footer className='max-w-7xl mx-auto py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-[#FCFCFC]'>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 items-start text-gray-700 text-sm lg:text-base'>

        <div className='flex flex-col gap-2 '>
          <NavLink to="/"><img src={logo} alt="logo"  className='h-14 w-auto'/></NavLink>
          <p className='leading-7 font-medium text-gray-700'>
            DairyHub is a modern SaaS platform that simplifies subscription management and delivery 
            operations for dairy businesses.
          </p>
        </div>

        <div className='flex flex-col font-medium gap-3 ml-0 md:ml-10 mt-4'>
          <h4 className={headingClass}>Company</h4>
          {footerLink.map((item) =>(
            <NavLink key={item.name} to = {item.path} className={activeClass}>{item.name}</NavLink>
          ))}
        </div>

        <div className='flex flex-col font-medium gap-3 mt-4'>
          <h4 className={headingClass}>Support</h4>
          <NavLink to="/privacy-policy" className={activeClass}>Privacy Policy</NavLink>
          <NavLink to="/terms-and-conditions" className={activeClass}>Terms & Condition</NavLink>
        </div>

        <div className='flex flex-col font-medium gap-3 mt-4 text-gray-700'>
          <h4 className={headingClass}>Address</h4>
    
          <div className='flex gap-3 items-center '>
            <MdLocationOn className='shrink-0 text-primary text-xl'/>
            <address className='not-italic'>Noida Uttar Pradesh <br />201304</address>
          </div>
          <div className='flex gap-3 items-center'>
            <MdEmail className='shrink-0 text-primary text-xl'/>
            <a href="mailto:hello@swadeshivip.com" className="hover:text-primary transition-colors">
              hello@swadeip.com
            </a>
          </div>
          <div className='flex gap-3 items-center'>
            <MdPhone className='shrink-0 text-primary text-xl'/>
            <a href="tel:8826182800" className="hover:text-primary transition-colors">
              8826182800
            </a>
          </div>
        </div>
      </div>

      {/* bottom */}
      <hr className='text-[#CEE3FF] my-6'/>
      
      <div className='flex items-center justify-between lg:mt-12 text-sm lg:text-base text-gray-700'>
        <p className='text-gray-600 '>@ 2026 Company Name, Inc. All rights reserved.</p>
       <ShareButtons/>
      </div>
      </div>
    </footer>
  )
}

export default Footer
