import React from 'react';
import './MainLayout.scss';
import { Header, Footer } from 'components/layout';

const MainLayout = props => {
  const { children } = props;
  return (
    <div className="mainLayout">
      <Header />
      <main className="mainLayout__container">{children}</main>
    </div>
  );
};

export default MainLayout;
