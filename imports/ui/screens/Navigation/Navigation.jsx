import React from 'react';
import PropTypes from 'prop-types';
import UserOptions from './UserOptions.jsx';

const Navigation = ({ children }) => {
  console.log('componente mayor');
  return (
    <div>
      <UserOptions />
      {children}
    </div>
  );
};

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
