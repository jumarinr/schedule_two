/* eslint-disable react/jsx-props-no-spreading */
import { Meteor } from 'meteor/meteor';
import { Redirect, Route } from 'react-router-dom';

import React from 'react';
import PropTypes from 'prop-types';
import exportComponent from './exportComponent';

const PrivateComponent = ({ component: Component, ...restOfProps }) => (
  <Route
    {...restOfProps}
    render={(props) => (
      Meteor.userId()
        ? <Component {...props} />
        : <Redirect to="/" />
    )}
  />
);

PrivateComponent.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateComponent;

// function to redirect page
// eslint-disable-next-line max-len
export const privateRouteComponent = (component, path) => exportComponent(PrivateComponent)(component, path);
