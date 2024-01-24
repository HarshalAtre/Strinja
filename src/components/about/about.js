
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './About.css';

const TextImageComponent = ({ }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(delay); 
  }, []);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });  

  return (
    <>
    <div className='all'>
    <animated.div className="text-image-container" style={fadeIn}>
      <div className="text-container">
        <h1>About Us</h1>
        <p className="pp">
          Welcome to Strinja, a realm where imagination takes flight, and creativity knows no bounds! Within our artistic haven, we specialize in the craft of creating exquisite Customized String Arts, each a unique masterpiece waiting to adorn your space. From the intricately designed to the boldly expressive, our string arts come in all sizes, offering a canvas for your individuality.
        </p>
        <br />
        <p>
          What sets Strinja apart is not just the artistry we infuse into our creations but the seamless experience we provide. Our Ready-Made String Arts are curated with precision, ready to find their homes in yours. And the best part? We believe in the magic of swift delivery, ensuring your chosen piece arrives within just 3 days, bringing artistic delight to your doorstep.
        </p>
        <br />
        <p>
          At Strinja, our journey is guided by a profound commitment to artistic excellence. We take immense pride in our creations, each a testament to our dedication to the fine craft of string arts. Our passion for innovation drives us to explore new horizons, blending traditional techniques with contemporary flair to create pieces that resonate with your unique taste.
        </p>
      </div>
      <div className="image-container">
        <img className='_img' src= "https://lh3.googleusercontent.com/pw/ABLVV84QUcVUcenkKJGexPwuWuscvMfD94zZZ7XjbGrteUUFVWqZxSMYXe1xoLcREMfibxJW6MbudrjoSmuhxqS0NV-0PpmqZr6tzruv1jhF8Qv_fGONgu2NNBXpPc9XSzocX9ZpWQwG9o_YZDGhQ841UpmJ=w989-h878-s-no-gm?authuser=0" alt="Description" />
      </div>
    </animated.div>
    <div className="mission">
    <div className="centered-container">
      <div className="content">
    
        <h1>Message from Our founder</h1>
        <p>I am thrilled to welcome you to the Strinja family, a venture that has been a dream for a while. As a founder, I want to share why we embarked on this journey. Each string of art creates thousands of memories, these arts are generally made by unemployed, uneducated women in rural and urban areas with the help of some engineers. Each customer is helping in women empowerment.</p>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default TextImageComponent;
