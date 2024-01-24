import React from 'react';
import { products } from './productdata.js';
import "./viewall.css";
import { NavLink } from 'react-router-dom';

const Viewall = ({title}) => {
    return (
      <>
      <div className='view_deal'>
            <h2>{title}</h2>
        </div>
      <div className='view_section'>
            {
              products.map((e)=>{
                if((e.tagline)===title){return(
                  <div className='view_item'>
                    <div>
                     <NavLink to="/getproductone"> <img className='view_img' src={e.url} alt=''/></NavLink>
                    </div>
                    <p className='view_name'>{e.title.longTitle}</p>
                    <p className='view_cost'> &#x20B9;{e.price.cost}/-</p>
                  </div>
                
                )}
              })
            }
      </div>
      
      </>
    )
  }


export default Viewall;