import { useHistory } from 'react-router-dom';

import React from 'react';

// material ui core
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// material icons
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

import Copyright from '../Copyright/Copyright.jsx';
import styles from '../Login/styles.jsx';

const NoPage = () => {
  const classes = styles();
  const history = useHistory();

  const redireccionar = () => history.push('/');

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.paper}>
        <CardContent className={classes.cardContent}>
          <ReportGmailerrorredIcon color="warning" sx={{ fontSize: 100 }} />

          <Typography component="h1" variant="h6" align="center">
            No se encontró la página que intentas acceder
          </Typography>

          <Box mt={2} className={classes.textItemAlign}>
            <Button
              type="submit"
              size="medium"
              variant="contained"
              color="primary"
              onClick={redireccionar}
            >
              Ir al inicio
            </Button>
          </Box>

          <Box mt={2}>
            <Copyright />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NoPage;
