import React, { useEffect } from 'react';
import "./pop.css"
const Pop = ({ title }) => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show_slide2');
        } else {
          entry.target.classList.remove('show_slide2');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden_slide2');
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const observer2 = new IntersectionObserver((entries2) => {
      entries2.forEach((entry2) => {
        console.log(entry2);
        if (entry2.isIntersecting) {
          entry2.target.classList.add('show');
        } else {
          entry2.target.classList.remove('show');
        }
      });
    });

    const hiddenElements2 = document.querySelectorAll('.hidden');
    hiddenElements2.forEach((el2) => observer2.observe(el2));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements2.forEach((el2) => observer2.unobserve(el2));
    };
  }, []);

  return (
    <>
      <div className='pro'>
        {/* FADED ANIMATION */}
        <div className='head'>
          <div className='hidden' style={{ transitionDelay: '0.1s' }}>
            <center><h2>Superior quality. Best pricing. Fastest delivery.</h2></center>
          </div>
          <div className='hidden' style={{ transitionDelay: '0.1s' }}>
            <center><h2>Shop only on</h2></center>
          </div>
          <div className='hidden' style={{ transitionDelay: '0.1s'}}>
            <center><h2 className='strinja'>Strinja</h2></center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pop;
