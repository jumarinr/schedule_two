import React, { useContext } from 'react';

// material ui core
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// material ui icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import { logOut } from './helpers.js';

import UserInfo from '../../contexts/UserInfo.jsx';
import styles from './styles.jsx';

const UserOptions = () => {
  const [position, setPosition] = React.useState(null);
  const userInfo = useContext(UserInfo);
  const classes = styles();

  const open = Boolean(position);

  const handleChange = (forOpen) => (event) => {
    setPosition(forOpen
      ? event.currentTarget
      : null);
  };

  const logOutSession = () => {
    handleChange(false)();
    logOut();
  };

  return (
    <>
      <IconButton onClick={handleChange(true)}>
        <Avatar
          color="primary"
          alt={userInfo.profile.name}
          src={userInfo.picture || userInfo.profile.name}
        />
      </IconButton>

      <Menu
        id="menu"
        anchorEl={position}
        open={open}
        onClose={handleChange(false)}
      >
        <MenuItem onClick={handleChange(false)}>
          <ListItemIcon>
            {userInfo.picture
              ? (
                <Avatar
                  color="primary"
                  alt={userInfo.profile.name}
                  src={userInfo.picture || userInfo.profile.name}
                  className={classes.small}
                />
              )
              : <AccountCircleIcon />}
          </ListItemIcon>
          Perfil
        </MenuItem>
        <MenuItem onClick={handleChange(false)}>
          <ListItemIcon>
            <ManageAccountsIcon color="primary" />
          </ListItemIcon>
          Administrar Perfil
        </MenuItem>
        <MenuItem onClick={logOutSession} disableRipple>
          <ListItemIcon>
            <LogoutIcon color="error" />
          </ListItemIcon>
          Cerrar sesión
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserOptions;
