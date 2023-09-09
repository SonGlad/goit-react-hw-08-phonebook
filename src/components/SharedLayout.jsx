import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';



export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};