import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../assets/images/logo.png'
import dropdown from './../assets/images/dropdown.svg'
import { navItems, platformItems } from '../data/navconfig'
import menuIcon from '../assets/images/menuIcon.png'
import Button from './ui/Button'

const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false)
    const [menuOpen , setMenuOpen] = useState(false)

    const dropdownRef = useRef()
    useEffect(() =>{
        const handleCLick = (e) =>{
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handleCLick)
        return() => document.removeEventListener('click', handleCLick)
    },[])

    useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

  return (
    <>
    <nav className=' bg-white px-6 md:px-10 lg:px-16 xl:px-20 sticky top-0 py-4 flex items-center
    justify-between text-[15px] h-20 transition-all shadow z-50'>
        <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
        <div className='hidden md:flex items-center gap-4 xl:gap-6 font-medium'>
            {
                navItems.map((item) =>{
                    if (item.type === "dropdown"){
                        return(
                            <div  className="relative" ref={dropdownRef}>
                                <div className='flex items-center gap-1'>
                                    <NavLink to="/platform" end className={({ isActive }) =>
                                    isActive ? "text-primary font-semibold py-2" : "py-2"}>
                                        {item.name}
                                    </NavLink>
                                    <button onClick={() => setIsOpen(!isOpen)} className='flex items-center 
                                     gap-1.5 cursor-pointer bg-transparent border-0 py-2 '>
                                    <img src={dropdown} alt="dropdown" className={`transition-transform 
                                    duration-200 ${isOpen ?"rotate-180" : ""}`}/>
                                </button>
                                </div>

                                {isOpen && (
                                    <div className='absolute flex flex-col top-full left-0 mt-5 w-47
                                    bg-white font-normal rounded-md shadow-md gap-0.5'>
                                        {platformItems.map((p) =>(
                                            <NavLink key={p.name} to={p.path} className={({isActive}) => `w-full px-4 py-2 
                                            flex items-start hover:bg-primary hover:text-white ${isActive ? "bg-primary text-white" : ""}`}>
                                                {p.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                                </div>
                        )}
                    return(
                        <NavLink key={item.name} to={item.path} className={({isActive}) => isActive ? 
                        "text-primary font-semibold" :""}>{item.name}</NavLink>
                    )
                })}
                <Button text="REQUEST FOR THE DEMO" size='sm'/>
                
        </div>
        <button className='ml-auto md:hidden cursor-pointer' onClick={()=>setMenuOpen(true)}><img src={menuIcon} alt=""  className='w-6 h-6'/></button>
    </nav>
 
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50">
            <div className="absolute right-0 top-0 h-full w-[40%] bg-white p-6">
            <button className="text-xl mb-6 cursor-pointer"onClick={() => setMenuOpen(false)}>✕</button>

            {/* MENU ITEMS */}

            <div className="flex flex-col gap-5">{navItems.map((item) => {
                if (item.type === "dropdown") {
                  return (
                    <div key={item.name}>
                      <p className="font-semibold mb-2">{item.name}</p>
                      {platformItems.map((p) => (
                        <NavLink key={p.name} to={p.path} onClick={() => setMenuOpen(false)}
                          className="block pl-2 py-1">{p.name}
                        </NavLink>
                      ))}
                    </div>
                  )
                }
                return (
                <NavLink key={item.name} to={item.path} onClick={() => setMenuOpen(false)}>
                    {item.name}
                </NavLink>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}


export default Navbar

