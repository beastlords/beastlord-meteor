import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// Set up all routes in the app
import HelloContainer from '../../ui/containers/HelloContainer'
const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div className="container">
       <Route exact path="/" component={HelloContainer}/> 
    </div>
  </Router>
);