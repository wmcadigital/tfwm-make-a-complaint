// IE 11 support
import 'react-app-polyfill/stable';
// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('wmn-app-name')
);
