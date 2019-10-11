import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'config';
import './Logo.scss';
import LogoImg from './logo-white.png';

const Logo = () => (
  <div className='logo'>
    <img src={LogoImg} alt='Experimentality Logo' />
  </div>
);

export default Logo;
