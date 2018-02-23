// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  console.log("Startup!")
  // Deluxe rock n roll
  console.log(Meteor.users.find().fetch())
  if(Meteor.users.find().fetch().length === 0){
    Accounts.createUser({username:"ludz", password:"q"})
    // Accounts.createUser({username:"ludz", password:"q"});
    console.log(Meteor.users.find().fetch());
  }
});
