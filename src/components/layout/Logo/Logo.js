import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'config';
import './Logo.scss';
import LogoImg from './logo-white.png';

const Logo = () => (
  <NavLink to={routes.landing}>
    <div className='logo'>
      <img src={LogoImg} className='logo__img' alt='Experimentality Logo' />
      <div className='logo__text'>Experimentality</div>
    </div>
  </NavLink>
);

export default Logo;
