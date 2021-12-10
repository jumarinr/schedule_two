/* eslint-disable react/jsx-props-no-spreading */
import { Meteor } from 'meteor/meteor';

import { Redirect, Route } from 'react-router-dom';

import React from 'react';
import PropTypes from 'prop-types';
import exportComponent from './exportComponent';

const PublicComponent = ({ component: Component, ...restOfProps }) => (
  <Route
    {...restOfProps}
    render={(props) => (
      Meteor.userId()
        ? <Redirect to="/" />
        : <Component {...props} />
    )}
  />
);

PublicComponent.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PublicComponent;

// function to redirect page
// eslint-disable-next-line max-len
export const publicRouteComponent = (component, path) => exportComponent(PublicComponent)(component, path);
