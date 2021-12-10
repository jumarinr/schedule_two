import { Meteor } from 'meteor/meteor';

import joi from 'joi';

const validateParams = (schemaObject) => (params) => {
  const schema = joi.object({ ...schemaObject });

  const { error, value } = schema.validate(params);

  if (error) throw new Meteor.Error(error.message, error.message);

  Object.assign(params, value);
};

export default validateParams;
