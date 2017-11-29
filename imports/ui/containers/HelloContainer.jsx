import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import {Example } from '../../api/example/example.js'
import Hello from '../components/Hello';

export default HelloContainer = withTracker(() => {
  const helloHandle = Meteor.subscribe('example');
  const loading = !helloHandle.ready();
  // const user = Meteor.users.findOne();
  const helloExists = !loading 
  return {
    loading,
    helloExists,
    // user,
  };
})(Hello);
