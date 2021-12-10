import { BrowserRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { ThemeProvider } from '@mui/material/styles';

import React from 'react';
// test import PropTypes from 'prop-types';

import { CssBaseline } from '@mui/material';
import Routes from '../../routes';
import themeLight from '../../configs/themeLight';

const App = () => {
  useTracker(() => Meteor.userId());

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
