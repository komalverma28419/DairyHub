import React from 'react'

const Title = ({
    text, lineWidth ="w-16",
    position = "-bottom-1",
    textAlign = "left",
    lineAlign = "left"
}) => {
    const textAlignClass = textAlign === "center" ? "text-center" :"text-left"
    const lineAlignClass = lineAlign === "center" ? "left-1/2 -translate-x-1/2" : "left-0"
  return (
    <h2 className={`relative text-2xl md:text-3xl font-bold text-[#313131] ${textAlignClass}`}>
      {text}
      <span className={`absolute bg-[#DE3E38] h-1 rounded-sm ${lineWidth} ${position} 
      ${lineAlignClass}`}/>
    </h2>
  )
}

export default Title
