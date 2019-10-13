import React from 'react';
import LogoImg from './logo-white.png';
import './Footer.scss';

const Footer = () => (
  <div className='footer' aria-label='Footer'>
    <img
      src={LogoImg}
      alt='Experimentality Logo'
      aria-label='Logo Experimentality'
      className='footer__logo'
    />
    made with love
  </div>
);

export default Footer;
