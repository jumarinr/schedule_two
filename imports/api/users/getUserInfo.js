import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Meteor } from 'meteor/meteor';

const getUserInfo = new ValidatedMethod({
  name: 'getUserInfo',
  validate: null,
  run() {
    this.unblock();

    const { userId } = Meteor;

    const user = Meteor.users.findOne({ _id: userId }, {
      fields: {
        username: 1,
        profile: 1,
      },
    });

    return {
      data: user,
    };
  },
});

export default getUserInfo;
