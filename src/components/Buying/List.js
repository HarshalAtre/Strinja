import { borderRadius, textAlign, width } from '@mui/system'
import React from 'react'
import "./buynow.css"

const List = () => {
  return (
    <div style={{display:"flex",flexDirection:"row", marginTop:"8px"}}>
        <select style={{
            
            fontSize:"16px",
            backgroundColor:"#1a1a1a",
            textDecoration:"none",
            width:"40px",
            color:"white",
            borderRadius:"8px",
            textAlign:"center"
    }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <p style={{cursor:"pointer",color:"#B12704",fontSize:"16px"}}>Delete Item</p>
    </div>
  )
}

export default List