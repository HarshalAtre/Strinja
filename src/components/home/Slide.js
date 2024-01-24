import React, { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from './productdata';
import './slide.css';
import { Tilt } from 'react-tilt'

import { NavLink } from 'react-router-dom';

const defaultOptions = {
  reverse: true,                  // reverse the tilt direction
  max: 3,                         // max tilt rotation (degrees)
  perspective: 100,               // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.01,                    // 2 = 200%, 1.5 = 150%, etc..
  speed: 300,                     // Speed of the enter/exit transition
  transition: true,               // Set a transition on enter/exit.
  axis: null,                     // What axis should be disabled. Can be X or Y.
  reset: true,                    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",  // Easing on enter/exit.
};


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const Slide = ({ title }) => {

  

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show_slide');
        } 
        // else {
        //   entry.target.classList.remove('show_slide');
        // }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden_slide');
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      // hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  useEffect(() => {
    const observer2 = new IntersectionObserver((entries2) => {
      entries2.forEach((entry2) => {
        console.log(entry2)
        if (entry2.isIntersecting) {
          entry2.target.classList.add('show');
        } 
        // else {
        //   entry2.target.classList.remove('show');
        // }
      });
    });

    const hiddenElements2 = document.querySelectorAll('.hidden');
    hiddenElements2.forEach((el2) => observer2.observe(el2));

    // Clean up the observer when the component unmounts
    return () => {
      // hiddenElements2.forEach((el2) => observer2.unobserve(el2));
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
      <div className='product_section'>
        {/* FADED ANIMATION */}
        <div className='heading'>
          <h2 className='hidden'>Explore our artisanal treasures</h2>
          <h2 className='hidden'>And let your creativity flourish</h2>
        </div>
       
      
      <div className="logo">
            <div className="logo hidden_slide">
            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <div>
              <img className='img_slide' src="./res-1.jpg" alt="Resource 1" />
              </div>
            </Tilt>
            </div>
            <div className="logo hidden_slide">
            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <img className='img_slide' src="./res-2.jpg" alt="Resource 2" />
            </Tilt>
            </div>
            <div className="logo hidden_slide">
            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <img className='img_slide' src="./res-3.jpg" alt="Resource 3" />
            </Tilt>
            </div>
            <div className="logo hidden_slide">
            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <img className='img_slide' src="./res-4.jpg" alt="Resource 4" />
              </Tilt>
            </div>
          </div>

    
        
        <div className='_btn'>
          <div className='_btn hidden'>
          
          <NavLink to="/gallery"> <button  className='view_btn'>Explore</button></NavLink>
          </div>
        </div>
      </div>
  )
}

export default Slide;
