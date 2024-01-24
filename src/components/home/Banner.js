import { style } from '@mui/system'
import React, { useEffect, useLayoutEffect } from 'react'
import "./banner.css"
import {useSpring, animated} from 'react-spring';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    
    const styles = useSpring({
        loop: { reverse:false  },
        from: { translateY: 0 },
        to: { translateY: -50 },
        config: {
        mass:10,
          tension: 120,
          friction: 50,
          clamp:true
        }
      });
    
    return (
        <>

            <div className="hero">
                
                <div className='left'>
                    <h2>Crafting Art </h2>
                    <h2>With Strinja</h2>
                    <div className='tagline'>
                        <p>Where string meets stealth</p>
                        <p>Every design is a masterpiece</p>
                    </div>

                    <NavLink className='button' to="/about"> <button>Know More</button></NavLink>

                 
            
                </div>
                <div className='right'>
                <animated.div style={styles}>
                <img className='hero_img' src='./hero.svg'/>
                </animated.div>
                </div>
                </div>

             

            </>
            )
}

            export default Banner