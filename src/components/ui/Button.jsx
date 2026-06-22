// import React from 'react'

// const Button = ({
//     text,onCLick,type="button", className ="" ,bgColor = "bg-[#2F75FD]"
// }) => {

//   return (
//     <button 
//     type={type}
//     onClick={onCLick} className={`py-2  xl:py-3 px-8 lg:px-10 rounded transition duration-200 
//     font-semibold cursor-pointer text-white hover:opacity-90 ${bgColor} ${className}`}>
//         {text}
//     </button>
//   )
// }

// export default Button


const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = ""
}) => {
  
  const baseStyle =
    "rounded transition duration-300  cursor-pointer"

  const variants = {
    primary: "bg-[#2F75FD] text-white hover:opacity-90 font-semibold text-sm",
    secondary : "bg-[#2C8351] text-white hover:opacity-90 font-semibold",
    danger: "bg-[#FF5150] text-white hover:bg-red-600 font-medium",
    outline: "border border-[#FFC6C6] text-[#FF5150] bg-white hover:bg-[#F04E3E] hover:text-white font-medium"
  }

  const sizes = {
    sm: "px-6 py-3 ",
    md: "px-8 py-3",
    lg: "px-10 py-4 "
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {text}
    </button>
  )
}

export default Button