import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

const Dashboard = () => {
  const loggedIn = 'Logged in';

  useEffect(() => {
    console.log('componente menor');
  }, []);

  return (
    <div>
      {loggedIn}
    </div>
  );
};

Dashboard.propTypes = {

};

export default Dashboard;
