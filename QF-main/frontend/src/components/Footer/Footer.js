import React from 'react';
import twitter from './FooterImages/twitter.png';
import linkdine from './FooterImages/linkdine.png';
import intsa from './FooterImages/insta.png';
import './FooterStyle.css';
import { Link } from "react-router-dom";
import logo from '../Navbar/logo.png'
function Footer() {
    return (
        <div className='mainFooterContainer'>
            <div className='upperFooter'>

                <div className='footerDescription'>
                    <img className='footerLogo' src={logo}></img>
                    <div className='footerContent'>
                        <p>Elevate Your Home's Aesthetics with Our<br></br>
                            Premium Furniture Collection.</p>
                    </div>
                </div>

                <div className='footerFeature'>
                    <p className='footerTitles'>Feature</p>
                    <div className='footerContent'>
                        <Link to='/'><p>Home</p></Link>
                        <Link to='/aboutUs'><p>About Us</p></Link>
                        <Link to='/contactUs'><p>Contact Us</p></Link>

                    </div>
                </div>

                <div className='footerGetInTouch'>
                    <p className='footerTitles'>Get In Touch</p>
                    <div className='footerContent'>
                        <p>admin@gmail.com</p>
                        <p>No 20. Badulla</p>
                        <p>077 540 1235</p>

                    </div>

                </div>
                <div className='footerSocialMedia'>
                    <p className='footerTitles'>Follow us on social media</p>
                    <div className='footerSocialMediaIcons'>
                        <Link to="#"><img src={intsa}></img></Link>
                        <Link to="#"><img src={twitter}></img></Link>
                        <Link to="#"><img src={linkdine}></img></Link>

                    </div>

                </div>
            </div>
            <div className='lowerFooter'>
                <p>&copy;Copyright Queens Furniture</p>
            </div>
        </div>
    )
}

export default Footer