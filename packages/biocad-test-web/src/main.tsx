import 'styles/base.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const containerElement = document.getElementById('root');

if (containerElement) {
  const root = ReactDOM.createRoot(containerElement);

  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}
