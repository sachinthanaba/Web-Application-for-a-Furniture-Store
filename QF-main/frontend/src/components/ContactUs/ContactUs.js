import React from 'react'
import './ContactUsStyle.css';
import contactUsText from './contactUsImages/contactUsText.png';
import CUStat1 from './contactUsImages/CUStat1.png';
import CUStat2 from './contactUsImages/CUStat2.png';
import CUStat3 from './contactUsImages/CUStat3.png';
import CUsriLanka from './contactUsImages/CUsriLanka.png';
import yt from './contactUsImages/yt.png'
import fb from './contactUsImages/fb.png'
import linkdine from './contactUsImages/linkdine.png'
import tiktok from './contactUsImages/tiktok.png'
import insta from './contactUsImages/intsa.png'
import CUsecondImage from './contactUsImages/CUsecondImage.png'
import CUthirdImage from './contactUsImages/CUthirdImage.png'
import phone from './contactUsImages/phone.png'
import whatsapp from './contactUsImages/whatsapp.png'
import mail from './contactUsImages/mail.png'
import location from './contactUsImages/location.png'
import aboutUsMain from './contactUsImages/aboutUsMain.jpg'
import Footer from '../Footer/Footer';



function ContactUs() {
    return (
        <div>
            <img src={aboutUsMain}></img>
            <div className='footerContact'>
                <Footer />

            </div>

        </div>
  
  
    )
}

export default ContactUs