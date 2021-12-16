import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link, animateScroll as scroll } from "react-scroll";


import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <Link 
to="/" 
className='scrollup'
onClick={()=>scroll.scrollToTop()}>
Hjem
</Link>
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <section className='footer-social-media__icon'>
      <SocialIcon url="https://facebook.com/" /></section>
      <section className='footer-social-media__icon'>
        <SocialIcon url="https://twitter.com/" /></section>
        <section className='footer-social-media__icon'>
        <SocialIcon url="https://instagram.com/" /></section>
        <section className='footer-social-media__icon'>
        <SocialIcon url="https://youtube.com/" /></section>
    
      </section>
      
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              Opplæringskontoret i ""
          </section>
          <section className="footer-info__returns">
            Kontakt
            <br />
            Adresse
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            Skole@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            +47 123 45 678
          </section>
          <section className="footer-info__contact">
            Info
            <br />
            Lorpim
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;