import React, { useEffect } from 'react';
import { useLocalStorageState } from 'ahooks';
import { Header } from './components';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { inIframe, isPhone } from '../utils';
import RouteView from './routeView';
import config from '@config';
import routesConfig from '@mobile-routes';
import { Route, Routes } from 'react-router-dom';

import './index.scss';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [theme] = useLocalStorageState('XNATE_THEMES', {
    defaultValue: 'light',
  });
  const language = searchParams.get('language');
  const {
    mobile: { redirect = '' },
  } = config;

  console.log('render mobile app');

  const updateHTMLTag = (val: string) => {
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', val);
  };

  routesConfig.length &&
  routesConfig.push({
    path: '/home',
    component: () => import('./components/home/index'),
  });

  useEffect(() => {
    if (redirect && pathname === '/') {
      navigate(`/home`);
    }
   
    updateHTMLTag(theme);
  }, []);

  return (
    <div className="xnate-site-app">
      {/* <Header>{'d'}</Header> */}
      <main className="xnate-site-app__container">
        {/* <RouteView /> */}
        <Routes>
          {routesConfig.map((route, idx: number) => {
            const LazyComponent = React.lazy(route.component);
            return (
              <Route
                key={idx}
                path={route.path}
                element={
                  <React.Suspense fallback={<>...</>}>
                    <LazyComponent />
                  </React.Suspense>
                }
              ></Route>
            );
          })}
        </Routes>
      </main>
    </div>
  );
}

export default App;
