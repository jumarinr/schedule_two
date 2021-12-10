import { Meteor } from 'meteor/meteor';

const handleResponse = (resolve) => (error, result) => {
  if (error) {
    resolve({
      error: error.reason || error.message,
      result: null,
    });
  }

  resolve({
    result,
  });
};

// eslint-disable-next-line max-len
const methodCall = async({ params, methodName }) => new Promise((resolve) => Meteor.call(methodName, params, handleResponse(resolve)));

export default methodCall;
