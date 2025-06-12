import '@biocad-test/ui/styles/base.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { ThemeProvider } from '@biocad-test/ui';

const containerElement = document.getElementById('root');

if (containerElement) {
  const root = ReactDOM.createRoot(containerElement);

  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
}
