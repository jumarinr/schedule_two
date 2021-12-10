import { Accounts } from 'meteor/accounts-base';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Meteor } from 'meteor/meteor';

import enrollmentEmail from './enrollmentEmail';
import validateParams from '../utils/validateParams';
import validations from '../../commons/validations';

const schema = {
  username: validations.email,
  password: validations.password,
  name: validations.name,
};

const registerUser = new ValidatedMethod({
  name: 'registerUser',
  validate: validateParams(schema),
  run({ username, name, password }) {
    try {
      this.unblock();

      const idUsuario = Accounts.createUser({
        username,
        email: username,
        password,
        profile: { name },
      });

      enrollmentEmail(username);

      return idUsuario;
    } catch (error) {
      console.error(error);

      throw new Meteor.Error('error_creando_usuario', error.reason);
    }
  },
});

export default registerUser;
