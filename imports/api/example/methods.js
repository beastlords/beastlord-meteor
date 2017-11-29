import { Meteor } from 'meteor/meteor';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
// import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import SimpleSchema from 'simpl-schema';

import { Example } from './example'

const schema = new SimpleSchema({
  id:{
    type:String
  },
  text:{
    type:String,
    label:"En text"
  }
});

export const insert = new ValidatedMethod({
  name: 'example.insert',
  validate: schema.validator(),
  run({ id, text }) {
    const example = Example.findOne(id);

    // example of authority validation
    if (example.isPrivate() && example.userId !== this.userId) {
      throw new Meteor.Error('example.insert.accessDenied',
        'Cannot add example to a private list that is not yours');
    }

    const newExample = {
      id,
      text,
      checked: false,
      createdAt: new Date(),
      // createdBy:this.userId,
    };

    Example.insert(newExample);
  },
});