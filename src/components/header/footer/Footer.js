import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = (theme, toggleTheme) => {
  return (
    <div className='footer_credits'>
        <footer>
        <div className='col'>
                <img className='_logo' src={theme === 'light' ? "./strinja_logo_2.png" : "./strinja_logo.png"} alt=""/>
        </div>
        <div className='col'>
                <h4 className='padded'>Contact</h4>
                <p><strong>Address :</strong> Bhabha Bhavan, SVNIT Campus,</p><p> Surat-395007, Gujarat, INDIA</p>
                <p><strong>Phone :</strong> +91 9999999999</p>
                <div class="follow">
                    <h4 className='bottom'> Follow us</h4>
                    <div class="icon">
                       <a href="" target='_blank'><FacebookIcon/></a> 
                       <a href="https://www.instagram.com/strinja.shop/" target='_blank'><InstagramIcon/></a> 
                    </div>
                </div>
        </div>
        <div class="col">
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
    </footer>
    <div class="credits">© Strinja 2024 </div>
    </div>
  )
}

export default Footer