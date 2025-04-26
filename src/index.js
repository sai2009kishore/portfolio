import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import './assets/styles/index.css';
import { getContext } from './assets/js/utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename={getContext()}>
      <App />
    </HashRouter>
  </React.StrictMode>
);