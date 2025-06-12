import { Outlet, ScrollRestoration } from 'react-router-dom';
import s from './BaseLayout.module.scss';
import clsx from 'clsx';

export function BaseLayout() {
  return (
    <div className={s.BaseLayout}>
      <main className={clsx(s.BaseLayout__main, s.ContentBox)}>
        <ScrollRestoration />
        <Outlet />
      </main>
    </div>
  );
}
