import React, { Component } from 'react';
import { MainLayout } from '../../components/layout';
import './Landing.scss';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="landing">
        <MainLayout>Landing page</MainLayout>
      </div>
    );
  }
}

export default Landing;
