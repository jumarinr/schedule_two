import { createContext } from 'react';

const defaultValue = {
  profile: {
    name: null,
  },
  username: null,
  picture: null,
};

const UserInfo = createContext(defaultValue);

export default UserInfo;
