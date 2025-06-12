import { createBrowserRouter, createRoutesFromElements, replace, Route } from 'react-router-dom';
import { BaseLayout } from './_layouts/BaseLayout';
import { HomePage } from './HomePage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route Component={BaseLayout}>
        <Route path={'/'} Component={HomePage} />
      </Route>

      {/* not found */}
      <Route path={'*'} loader={() => replace('/')} />
    </Route>
  )
);
