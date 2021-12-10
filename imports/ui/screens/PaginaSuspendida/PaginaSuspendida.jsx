import { BeatLoader } from 'react-spinners';

import React from 'react';

// material ui core
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import colors from '@mui/material/colors';

import styles from '../Login/styles.jsx';
import Copyright from '../Copyright/Copyright.jsx';

const PaginaSuspendida = () => {
  const classes = styles();

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.paper}>
        <CardContent className={classes.cardContent}>

          <Box mt={2}>
            <Typography component="h1" variant="h6">
              Cargando contenido...
            </Typography>
          </Box>

          <Box mt={2} className={classes.textItemAlign}>
            <BeatLoader color={colors.purple[300]} />
          </Box>

          <Box mt={3}>
            <Copyright />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

PaginaSuspendida.propTypes = {

};

export default PaginaSuspendida;
