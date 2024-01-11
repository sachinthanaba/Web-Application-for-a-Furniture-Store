import React from 'react'
import main from './contactUsImages/main.jpg'
import Footer from '../Footer/Footer';
import './AboutUsStyle.css';




function AboutUs() {
  return (
    <div className='AboutUsMainContainer'>
    <div className='mainImage'>
    </div>
      <div className='mainImage'>
        <img src={main}></img>
      </div>
      <div className='footerAbout'>
        <Footer />
      </div>
    </div>


  )
}

export default AboutUs;
