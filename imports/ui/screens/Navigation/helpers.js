import { Meteor } from 'meteor/meteor';
import promisify from '../../utils/promisify';

const logOutMeteor = promisify(Meteor.logout);

export const logOut = async() => {
  try {
    await logOutMeteor();

    return {
      error: null,
    };
  } catch (error) {
    return {
      error: error.reason,
    };
  }
};

export const value = false;
