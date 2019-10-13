import React from 'react';
import { Logo } from 'components/layout';
import { Search } from 'components/primary';
import './Header.scss';

const Header = props => (
  <header className='header' aria-label='Header'>
    <Logo />
    <Search handleSearch={props.handleSearch} />
  </header>
);

export default Header;
