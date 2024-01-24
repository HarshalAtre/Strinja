import React from 'react'
import WhatsApp_icon from "../gallery/styles/WhatsApp_icon.png";
import "./styles/Whatsapp.css"
const Whatsapp = () => {
  const phone=`https://wa.me/91${8160170389}`
  return (
    <div className='_icon'>
      <a target='_blank' href={phone}>
      <img src={WhatsApp_icon} alt="" /></a>
    </div>  
  )
}

export default Whatsapp