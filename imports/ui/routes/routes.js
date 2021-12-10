import _ from 'lodash';

import { lazy } from 'react';

import { COMMON, PRIVATE, PUBLIC } from '../configs/tipoRuta';

const InicioSesion = lazy(() => import('../screens/Login/Login.jsx'));
const Registro = lazy(() => import('../screens/Login/Register.jsx'));
const Dashboard = lazy(() => import('../screens/Dashboard/Dashboard.jsx'));

const HOME_PATH = '/';

export const ROUTES = [
  {
    path: '/',
    component: InicioSesion,
    type: PUBLIC,
  },
  {
    path: '/registro',
    component: Registro,
    type: PUBLIC,
  },
  {
    path: '/',
    component: Dashboard,
    type: PRIVATE,
  },
];

const filterRoute = (type) => _.filter(ROUTES, { type });

export const getPublicRoutes = () => filterRoute(PUBLIC);
export const getPrivateRoutes = () => filterRoute(PRIVATE);
export const getCommonRoutes = () => filterRoute(COMMON);

export const setDashboardVisibility = (loggedIn) => ({ path }) => {
  if (path === HOME_PATH && !loggedIn) return false;

  return true;
};
