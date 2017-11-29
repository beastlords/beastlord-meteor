import { Meteor } from 'meteor/meteor'

import { Example } from '../example'

if (Meteor.server) {
  Meteor.publish("example", () => {
    console.log("Hallå publish?")
    return Example.find();
  });
}