import React, { useState } from 'react';

// material ui core
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { login } from './helpers.js';

import Copyright from '../Copyright/Copyright.jsx';
import styles from './styles.jsx';

const Login = () => {
  const classes = styles();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const onLoginUser = async(event) => {
    event.preventDefault();

    const { error: detailsError } = await login({
      email: username,
      password,
    });

    setError(detailsError);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.paper}>
        <CardContent className={classes.cardContent}>

          <Typography component="h1" variant="h5">
            Iniciar sesión en Schedule v2
          </Typography>

          <form className={classes.form} validate="true" onSubmit={onLoginUser}>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              autoFocus
              type="email"
              label="Correo electronico"
              name="email"
              autoComplete="email"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password || ''}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <Alert severity="error">{error}</Alert>}

            <Box mt={2} className={classes.textItemAlign}>
              <Button
                type="submit"
                size="medium"
                variant="contained"
                color="primary"
              >
                Iniciar Sesión
              </Button>
            </Box>

            <Box mt={2} className={classes.textItemAlign}>
              <Link href="/registro" variant="body2">
                ¿No tienes cuenta? Registrate aqui!
              </Link>
            </Box>

          </form>

          <Box mt={2}>
            <Copyright />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
