import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes/router';

const appTitle = 'Тестовое задание в компанию BIOCAD';

export default function App() {
  return (
    <React.Fragment>
      <Helmet defaultTitle={appTitle} titleTemplate={`${appTitle} — %s`} />
      <RouterProvider router={router} />
    </React.Fragment>
  );
}
