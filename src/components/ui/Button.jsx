
const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
   children,
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
    lg: "lg:px-12 px-8 lg:py-4 py-3 md:text-base text-sm"
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children || text}
    </button>
  )
}

export default Button