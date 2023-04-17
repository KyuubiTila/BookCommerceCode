import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ScrollToTop } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <ScrollToTop />
    <App />
  </Router>
  // </React.StrictMode>
);
