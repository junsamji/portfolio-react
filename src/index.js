import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
export { default as Home } from './pages/Home';
export { default as About } from './pages/About';
export { default as Sub } from './pages/Sub';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

