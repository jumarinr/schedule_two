import { withRouter } from 'react-router-dom';

import React from 'react';

// function to exportComponent page
const exportComponent = (Element) => (component, path) => (
  <Element
    key={path}
    path={path}
    component={withRouter(component)}
    exact
  />
);

export default exportComponent;
