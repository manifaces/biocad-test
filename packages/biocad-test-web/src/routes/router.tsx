import { createBrowserRouter, createRoutesFromElements, replace, Route } from 'react-router-dom';
import { BaseLayout } from './_layouts/BaseLayout';
import { SequencePage } from './SequencePage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route Component={BaseLayout}>
        <Route path={'/'} Component={SequencePage} />
      </Route>

      {/* not found */}
      <Route path={'*'} loader={() => replace('/')} />
    </Route>
  )
);
