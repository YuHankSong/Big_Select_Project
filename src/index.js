import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React StrictMode runs render twice, so useEffect [] won't work sometimes
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
