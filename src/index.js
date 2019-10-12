import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Comfortaa:300,400,700,900', 'sams-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
