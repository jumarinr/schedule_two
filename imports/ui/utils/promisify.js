import * as BlueBird from 'bluebird';

const promisify = (functionToPromisify) => async(...params) => {
  const functionPromisified = BlueBird.promisify(functionToPromisify);

  return functionPromisified(...params);
};

export default promisify;
