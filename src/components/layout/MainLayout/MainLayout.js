import React from 'react';
import './MainLayout.scss';
import { Header, Footer } from 'components/layout';

const MainLayout = props => {
  const { children } = props;
  return (
    <div className='mainLayout'>
      <Header handleSearch={props.handleSearch} />
      <main className='mainLayout__container'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
