// import React, { useEffect, useRef, useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import logo from './../assets/images/logo.png'
// import dropdown from './../assets/images/dropdown.svg'
// import { navItems, platformItems } from '../data/navconfig'
// import menuIcon from '../assets/images/menuIcon.png'
// import Button from './ui/Button'

// const Navbar = () => {
//     const[isOpen, setIsOpen] = useState(false)
//     const [menuOpen , setMenuOpen] = useState(false)

//     const dropdownRef = useRef()
//     useEffect(() =>{
//         const handleCLick = (e) =>{
//             if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
//                 setIsOpen(false)
//             }
//         }
//         document.addEventListener('click', handleCLick)
//         return() => document.removeEventListener('click', handleCLick)
//     },[])

//     useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "auto";
//     }, [menuOpen]);

//   return (
//     <>
//     <nav className=' bg-white px-6 lg:px-16 xl:px-20 sticky top-0 py-4 flex items-center
//     justify-between text-[15px] h-20 transition-all shadow z-50'>
//         <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
//         <div className='hidden md:flex items-center gap-3 lg:gap-4 xl:gap-6 font-medium'>
//             {
//                 navItems.map((item) =>{
//                     if (item.type === "dropdown"){
//                         return(
//                             <div  className="relative" ref={dropdownRef}>
//                                 <div className='flex items-center gap-1'>
//                                     <NavLink to="/platform" end className={({ isActive }) =>
//                                     isActive ? "text-primary font-semibold py-2" : "py-2"}>
//                                         {item.name}
//                                     </NavLink>
//                                     <button onClick={() => setIsOpen(!isOpen)} className='flex items-center 
//                                      gap-1.5 cursor-pointer bg-transparent border-0 py-2 '>
//                                     <img src={dropdown} alt="dropdown" className={`transition-transform 
//                                     duration-200 ${isOpen ?"rotate-180" : ""}`}/>
//                                 </button>
//                                 </div>

//                                 {isOpen && (
//                                     <div className='absolute flex flex-col top-full left-0 mt-5 w-47
//                                     bg-white font-normal rounded-md shadow-md gap-0.5'>
//                                         {platformItems.map((p) =>(
//                                             <NavLink key={p.name} to={p.path} className={({isActive}) => `w-full px-4 py-2 
//                                             flex items-start hover:bg-primary hover:text-white ${isActive ? "bg-primary text-white" : ""}`}>
//                                                 {p.name}
//                                             </NavLink>
//                                         ))}
//                                     </div>
//                                 )}
//                                 </div>
//                         )}
//                     return(
//                         <NavLink key={item.name} to={item.path} className={({isActive}) => isActive ? 
//                         "text-primary font-semibold" :""}>{item.name}</NavLink>
//                     )
//                 })}
//                 <Button text="REQUEST FOR THE DEMO" size='sm'/>
                
//         </div>
//         <button className='ml-auto md:hidden cursor-pointer' onClick={()=>setMenuOpen(true)}><img src={menuIcon} alt=""  className='w-6 h-6'/></button>
//     </nav>
 
//       {menuOpen && (
//         <div className="fixed inset-0 bg-black/40 z-50">
//             <div className="absolute right-0 top-0 h-full w-[40%] bg-white p-6">
//             <button className="text-xl mb-6 cursor-pointer"onClick={() => setMenuOpen(false)}>✕</button>

//             {/* MENU ITEMS */}

//             <div className="flex flex-col gap-5">{navItems.map((item) => {
//                 if (item.type === "dropdown") {
//                   return (
//                     <div key={item.name}>
//                       <p className="font-semibold mb-2">{item.name}</p>
//                       {platformItems.map((p) => (
//                         <NavLink key={p.name} to={p.path} onClick={() => setMenuOpen(false)}
//                           className="block pl-2 py-1">{p.name}
//                         </NavLink>
//                       ))}
//                     </div>
//                   )
//                 }
//                 return (
//                 <NavLink key={item.name} to={item.path} onClick={() => setMenuOpen(false)}>
//                     {item.name}
//                 </NavLink>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }


// export default Navbar



import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import dropdown from "../assets/images/dropdown.svg";
import menuIcon from "../assets/images/menuIcon.png";
import { navItems, platformItems } from "../data/navconfig";
import Button from "./ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const dropdownRef = useRef();

  // Desktop dropdown outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ================= Desktop Navbar ================= */}
      <nav className="sticky top-0 z-50 h-20 bg-white shadow px-6 lg:px-16 xl:px-20 flex items-center justify-between">

        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>

        <div className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-6 font-medium text-[15px]">

          {navItems.map((item) => {
            if (item.type === "dropdown") {
              return (
                <div
                  key={item.name}
                  ref={dropdownRef}
                  className="relative"
                >
                  <div className="flex items-center gap-1">

                    <NavLink
                      to="/platform"
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary font-semibold py-2"
                          : "py-2 hover:text-primary transition-colors"
                      }
                    >
                      {item.name}
                    </NavLink>

                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="cursor-pointer"
                    >
                      <img
                        src={dropdown}
                        alt=""
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {isOpen && (
                    <div className="absolute left-0 top-full mt-4 w-52 rounded-lg bg-white shadow-lg overflow-hidden">

                      {platformItems.map((p) => (
                        <NavLink
                          key={p.name}
                          to={p.path}
                          className={({ isActive }) =>
                            `block px-5 py-3 transition-all ${
                              isActive
                                ? "bg-primary text-white"
                                : "hover:bg-primary hover:text-white"
                            }`
                          }
                        >
                          {p.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold"
                    : "hover:text-primary transition-colors"
                }
              >
                {item.name}
              </NavLink>
            );
          })}

          <Button text="REQUEST FOR THE DEMO" size="sm" />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden ml-auto"
        >
          <img
            src={menuIcon}
            alt="menu"
            className="w-7 h-7"
          />
        </button>
      </nav>

      {/* ================= Mobile Drawer ================= */}

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          menuOpen
            ? "visible bg-black/40"
            : "invisible bg-transparent"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top */}
          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b p-5">
              <img
                src={logo}
                alt="logo"
                className="w-32"
              />

              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col p-5">

              {navItems.map((item) => {
                if (item.type === "dropdown") {
                  return (
                    <div key={item.name}>

                      <button
                        onClick={() =>
                          setMobileDropdown(!mobileDropdown)
                        }
                        className="w-full flex justify-between items-center py-4 font-medium text-left"
                      >
                        {item.name}

                        <img
                          src={dropdown}
                          alt=""
                          className={`transition-transform duration-300 ${
                            mobileDropdown
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          mobileDropdown
                            ? "max-h-80 pb-3"
                            : "max-h-0"
                        }`}
                      >
                        {platformItems.map((p) => (
                          <NavLink
                            key={p.name}
                            to={p.path}
                            onClick={() => {
                              setMenuOpen(false);
                              setMobileDropdown(false);
                            }}
                            className={({ isActive }) =>
                              `block rounded-lg ml-4 px-3 py-3 transition ${
                                isActive
                                  ? "bg-primary text-white"
                                  : "hover:bg-gray-100"
                              }`
                            }
                          >
                            {p.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `py-4 font-medium transition ${
                        isActive
                          ? "text-primary"
                          : "hover:text-primary"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Bottom Button */}
          <div className="p-5 border-t">
            <Button
              text="REQUEST FOR THE DEMO"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
