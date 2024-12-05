import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { Navigate, Route, Routes, HashRouter, useLocation } from 'react-router-dom';

import { routes } from '@/navigation/routes.tsx';
import Navbar from './Navbar';

export function App() {
  const lp = useLaunchParams();
  const location = useLocation();

  // Define routes where Navbar should not be shown
  const hideNavbarRoutes = [
    '/', 
  ];
  const isDark = useSignal(miniApp.isDark);
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <HashRouter>
        <Routes>
          {routes.map((route) => <Route key={route.path} {...route} />)}
          <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
        {shouldShowNavbar && <Navbar />}
      </HashRouter>
    </AppRoot>
  );
}
