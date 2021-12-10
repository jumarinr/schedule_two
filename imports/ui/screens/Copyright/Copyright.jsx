import React from 'react';

// material ui core
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="/">
      {`Schedule v2 ${new Date().getFullYear()}`}
    </Link>
  </Typography>
);

export default Copyright;
