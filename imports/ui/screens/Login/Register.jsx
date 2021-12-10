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

import { registerUser } from './helpers.js';

import Copyright from '../Copyright/Copyright.jsx';
import styles from './styles.jsx';

const Register = () => {
  const classes = styles();

  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [error, setError] = useState(null);

  const onRegisterUser = async (event) => {
    event.preventDefault();

    const { error: errorReturn } = await registerUser({
      password,
      passwordConfirm,
      username,
      name,
    });

    setError(errorReturn);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.paper}>
        <CardContent className={classes.cardContent}>

          <Typography component="h1" variant="h5">
            Registrate en Schedule v2
          </Typography>

          <form className={classes.form} validate="true" onSubmit={onRegisterUser}>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              autoFocus
              type="text"
              label="Nombre"
              name="name"
              autoComplete="name"
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
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

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirmar Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={passwordConfirm || ''}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />

            {error && <Alert severity="error">{error}</Alert>}

            <Box mt={2} className={classes.textItemAlign}>
              <Button
                type="submit"
                size="medium"
                variant="contained"
                color="primary"
              >
                Registrarse
              </Button>
            </Box>

            <Box mt={2} className={classes.textItemAlign}>
              <Link href="/" variant="body2">
                ¿Tienes cuenta? Inicia sesión aqui!
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

export default Register;
