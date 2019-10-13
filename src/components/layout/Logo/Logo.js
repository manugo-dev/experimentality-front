import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'config';
import './Logo.scss';
import LogoImg from './logo-white.png';

const Logo = () => (
  <NavLink to={routes.landing}>
    <div className='logo' aria-label='Logo Container'>
      <img
        src={LogoImg}
        className='logo__img'
        alt='Experimentality Logo'
        aria-label='Logo Image'
      />
      <div className='logo__text' aria-label='Experimentality'>
        Experimentality
      </div>
    </div>
  </NavLink>
);

export default Logo;
