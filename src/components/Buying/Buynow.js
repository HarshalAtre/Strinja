import React from 'react'
import { Divider } from '@mui/material'
import './buynow.css'
import List from './List.js'
import Total from './Total.js'
import Finalbuy from './Finalbuy.js'

const Buynow = () => {
  return (
    <div className='buynow_section'>
        <div className='buynow_container'>
            <div className="left_buy">
                <h1>Shoping Cart</h1>
                <p> Select all items</p>
                <span className='leftbuyprice'>Price</span>
                <Divider/>
                <div className='item_container'>
                    <img src="./p1.jfif"/>
                    <div className='item_detail'>
                        <h3>
                            Watermellon - 1 kg
                        </h3>
                        <h3> Fruits & Vegetable</h3>
                        <h3 className='diffrentprice'>&#x20B9;49/-</h3>
                        <List/>
                    </div>
                    <h3 className='item_price'>&#x20B9;49/-</h3>
                </div>
                <Divider/>
                <Total/>

            </div>
            <Finalbuy/>
        </div>
    </div>
  )
}

export default Buynow