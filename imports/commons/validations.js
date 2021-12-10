import joi from 'joi';

const validations = {
  email: joi.string().email({ tlds: { allow: false } }),
  password: joi.string().min(5),
  name: joi.string().optional(),
};

export default validations;
