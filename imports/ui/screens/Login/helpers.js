import { Meteor } from 'meteor/meteor';

import joi from 'joi';
import _ from 'lodash';

import methodCall from '../../utils/methodCall';
import promisify from '../../utils/promisify';
import schemaObject from '../../../commons/validations';

const schema = joi.object({
  username: schemaObject.email,
  password: schemaObject.password,
  name: schemaObject.name,
});

const loginUser = promisify(Meteor.loginWithPassword);

export const validateUser = ({
  username, password, passwordConfirm, name,
}) => {
  const { error } = schema.validate({
    username,
    password,
    name,
  });

  const errorPassword = passwordConfirm !== password;

  const errorMessagePassword = errorPassword
    ? 'Las contraseñas no coinciden'
    : null;

  return _.get(error, 'message') || errorMessagePassword;
};

export const registerUser = async({
  username, password, passwordConfirm, name,
}) => {
  const isNotValid = validateUser({
    password,
    passwordConfirm,
    username,
    name,
  });

  if (isNotValid) {
    return { error: isNotValid };
  }

  return methodCall({
    methodName: 'registerUser',
    params: {
      username,
      password,
      name,
    },
  });
};

export const login = async({ email, password }) => {
  try {
    await loginUser(email, password);

    return {
      error: null,
    };
  } catch (error) {
    return {
      error: 'Error iniciando sesión',
    };
  }
};
