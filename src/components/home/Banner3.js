import React from 'react'
import './banner3.css'

const Banner3 = () => {
  return (
    <div style={{backgroundImage:"url(./news.jpg)"}} id='newsletter' className='ban3'>
        <div class="newstext">
            <h4>Sign Up For Latest Art</h4>
            <p>Get E-mail updates about our latest arival and <span>special offers</span></p>
        </div>
        <div class="form">
            <input type="text" placeholder="Your e-mail address"/>
            <button class="normal">Sign Up</button>
        </div>
    </div>
  )
}

export default Banner3