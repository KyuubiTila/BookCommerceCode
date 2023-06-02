import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ScrollToTop } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import { FilterProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <FilterProvider>
      <ScrollToTop />
      <ToastContainer
        closeButton={false}
        autoClose={3000}
        position={'top-center'}
      />

      <App />
    </FilterProvider>
  </Router>
  // </React.StrictMode>
);
