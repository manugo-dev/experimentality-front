// Copyright 2004-present Facebook. All Rights Reserved.

import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
