import React from 'react'
import map from "../../assets/images/map.png"

const ClientMap = ({client}) => {
   return (
    <div className="relative">
      <img src={map} alt="map" className='flex items-center w-full'/>

     {client.locations.map((loc, index) => (
        <div
          key={loc.id}
          className="absolute animate-float"
          style={{
            top: loc.top,
            left: loc.left,
            animationDelay: `${index * 0.3}s`,
            transform: "translate(-50%, -50%)",
          }}>
          <img src={loc.image} alt="" className="object-contain"/>
        </div>
      ))}
    </div>
  );
}
export default ClientMap
