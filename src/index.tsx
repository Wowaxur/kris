import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
      <h5 className={'footer'}>Агентство недвижимости «Свои на юге»
      </h5>  </React.StrictMode>
);

reportWebVitals();
