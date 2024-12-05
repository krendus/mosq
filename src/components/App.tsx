import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { Navigate, Route, Routes, HashRouter, useLocation } from 'react-router-dom';

import { routes } from '@/navigation/routes.tsx';
import Navbar from './Navbar';

function Pages() {
  const location = useLocation();
  const hideNavbarRoutes = [
    '/',
  ];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);
  return <>
    <div className='pb-16'>
      <Routes>
        {routes.map((route) => <Route key={route.path} {...route} />)}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
    {shouldShowNavbar && <Navbar />}
  </>
}
export function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);


  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <HashRouter>
        <Pages />
      </HashRouter>
    </AppRoot>
  );
}
