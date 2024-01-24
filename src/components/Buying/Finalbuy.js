import { Button } from '@mui/material'
import React from 'react'
import "./buynow.css"

const Finalbuy = () => {
  return (
    <div style={{
        flex: ".25",
        marginLeft:"10px",
        backgroundColor: "#ffffff",
        padding: "10px 20px",
        borderRadius: "20px",
    }} className='right_buy'>
        <div className='cost_buy'>
            <p>FREE Delivery</p><br/>
            <span style={{color:"#1a1a1a"}}> Amount to pay</span>
            <h3>Subtotal (1 Items): <span style={{fontWeight:"700"}}> &#x20B9;49/-</span> </h3>
            </div>
        <button className="buy_btn" style={{
                width:"100%",
                marginTop: "50px",
                color:"white",
                fontWeight:'700',
                padding: "8px 0",
                borderRadius: "12px",
                border: "none",
                outline: "none",
                backgroundColor:"#2b8c10",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 0 10px -5px rgba(0,0,0,.5)"
            }}>Buy Now</button>
    </div>
  )
}

export default Finalbuy