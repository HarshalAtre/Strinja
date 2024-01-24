import React, { useState,useRef } from 'react';
import './ContactUs.css'; // Make sure to import your CSS file
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const phone=`https://wa.me/91${8160170389}`
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleFocus = (field) => {
    setFocus((prevFocus) => ({ ...prevFocus, [field]: true }));
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setFocus((prevFocus) => ({ ...prevFocus, [field]: false }));
    }
  };
////////////////////////////////////////////////////////

const form=useRef()

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_au7euzb', 'template_uy2e3vg', form.current, 'Vk_3rCcwDSU9rBVsQ')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
};
  return (
    <div className="container">
    <div className="_form">
      <div className="contact-info">
        <h3 className="title">Let's get in touch</h3>
        <div >
        <iframe className="map"
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.81179225283!2d72.7883083!3d21.159886999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d620f8a7dff%3A0x27281aed487eaeb9!2sBhabha%20Bhavan!5e0!3m2!1shi!2sin!4v1703932373080!5m2!1shi!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
        <div className="social-media">
          <p>Connect with us :</p>
          <div className="social-icons" >
            <a className='mid'  href={phone} >
              <WhatsAppIcon/>
            </a>
            <a href="https://www.instagram.com/strinja.shop/" >
             <InstagramIcon/>
             </a>
            <a href="#" >
             <PhoneIcon/>
            </a>
            <a href="mailto:stringa@gmail.com" >
              <EmailIcon/>
            </a>
          </div> 
        </div>
      </div>
      <div className="contact-form">
        <span className="circle one" />
        <span className="circle two" />
        <form ref={form} onSubmit={sendEmail} action="index.html" autoComplete="off">
          <h3 className="title">Contact us</h3>
          <div className="input-container">
            <input type="text" name="name" placeholder='Username' className="input" required/>
            <label htmlFor=""></label>
            <span>Username</span>
          </div>
          <div className="input-container">
            <input type="email" name="email" placeholder='Email' className="input" required/>
            <label htmlFor=""></label>
            <span></span>
          </div>
          <div className="input-container">
            <input type="tel" name="phone" placeholder='Phone' className="input" required/>
            <label htmlFor=""></label>
            <span></span>
          </div>
          <div className="input-container textarea">
            <textarea name="message" className="input" placeholder='Message' defaultValue={""} required/>
            <label htmlFor=""></label>
            <span></span>
          </div>
          <input type="submit" defaultValue="Send" className="_btn_" />
        </form>
      </div>
    </div>
  </div>
  );
};

export default ContactForm;
