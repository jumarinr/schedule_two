import _ from 'lodash';

import { Meteor } from 'meteor/meteor';
import {
  Route, Switch, useLocation, Redirect,
} from 'react-router-dom';

import React, {
  Suspense, useState, useEffect, useMemo,
} from 'react';

import { getPrivateRoutes, getPublicRoutes, setDashboardVisibility } from './routes';
import { publicRouteComponent } from './PublicComponent.jsx';
import { privateRouteComponent } from './PrivateComponent.jsx';

import Navigation from '../screens/Navigation/Navigation.jsx';
import NoPage from '../screens/NoPage/NoPage.jsx';
import PaginaSuspendida from '../screens/PaginaSuspendida/PaginaSuspendida.jsx';
import UserInfo from '../contexts/UserInfo.jsx';
import methodCall from '../utils/methodCall';

const Routes = () => {
  const location = useLocation();
  const usuarioId = Meteor.userId();

  const [userInfo, setUserInfo] = useState(null);

  const publicPages = useMemo(() => getPublicRoutes()
    .filter(setDashboardVisibility(!usuarioId))
    .map((route) => route.path), [usuarioId]);

  const privatePages = useMemo(() => getPrivateRoutes()
    .filter(setDashboardVisibility(usuarioId))
    .map((route) => route.path), [usuarioId]);

  const getUserInfo = async () => {
    const { result } = await methodCall({
      methodName: 'getUserInfo',
    });

    setUserInfo(_.get(result, 'data', null));
  };

  useEffect(() => {
    if (usuarioId) getUserInfo();
  }, [usuarioId]);

  return (
    <Switch>

      {/* Public routes */}
      <Route path={publicPages} exact>
        <Suspense fallback={<PaginaSuspendida />}>
          <Switch location={location} key={location.pathname}>
            {getPublicRoutes()
              .map(({ component, path }) => publicRouteComponent(component, path))}
          </Switch>
        </Suspense>
      </Route>

      {/* Private routes */}
      <Route path={privatePages} exact>
        <UserInfo.Provider value={userInfo}>
          {userInfo
            ? (
              <Suspense fallback={<PaginaSuspendida />}>
                <Navigation>
                  <Switch location={location} key={location.pathname}>
                    {getPrivateRoutes()
                      .map(({ component, path }) => privateRouteComponent(component, path))}
                  </Switch>
                </Navigation>
              </Suspense>
            )
            : null}
        </UserInfo.Provider>
      </Route>

      {/* Not found page */}
      <Route component={NoPage} />

      <Redirect to="/" />

    </Switch>
  );
};

export default Routes;
