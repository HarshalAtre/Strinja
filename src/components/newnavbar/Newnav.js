import React from 'react'
import "./newnav.css"
import { NavLink } from 'react-router-dom'

const Newnav = () => {
  return (
    <div className='new_nav'>
        <div className='nav_data'>
            <div className='left_data'>
                <NavLink to="/shop"><p>Shop</p></NavLink>
                <p>Best Seller</p>
                <p>Categories</p>
                <p>Customer Service</p>
                <a href='https://www.linkedin.com/in/shivam-dhamesha-7a7b63255'><p></p></a>
               <a href='https://www.linkedin.com/in/shivam-dhamesha-7a7b63255'><p>About</p></a>
            </div>
        </div>

    </div>
  )
}

export default Newnav