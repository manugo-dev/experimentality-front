import React from 'react';
import LogoImg from './logo-white.png';
import './Footer.scss';

const Footer = () => (
  <div className='footer'>
    <img src={LogoImg} alt='Experimentality Logo' className='footer__logo' />
    made with love
  </div>
);

export default Footer;
