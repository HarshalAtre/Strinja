
import './back.scss';

import React, { useEffect } from 'react';

function Back() {
    useEffect(() => {
      const interBubble = document.querySelector('.interactive');
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;
  
      function move() {
          if (interBubble !== null) {
              curX += (tgX - curX) / 8;
              curY += (tgY - curY) / 8;
              interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
          }
          requestAnimationFrame(() => {
              move();
          });
      }
      
  
      window.addEventListener('mousemove', (event) => {
          tgX = event.clientX;
          tgY = event.clientY;
      });
  
      move();
  },[]); // Empty dependency array means this effect runs once on mount and clean up on unmount

    return (
        <div>
            <div>
    <div class="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div class="gradients-container">
        <div class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
        <div class="g4"></div>
        <div class="g5"></div>
        <div class="interactive"></div>
      </div>
    </div>
    </div>
        </div>
    );
}

export default Back;