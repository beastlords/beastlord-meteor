import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Container} from 'semantic-ui-react'

// Set up all routes in the app
import Layout from '../../ui/components/Layout'
import HelloContainer from '../../ui/containers/HelloContainer'
import SignIn from '../../ui/components/SignIn'

const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Layout>
      <Route exact path="/" component={HelloContainer} />
      <Route exact path="/signin" component={SignIn} />
    </Layout>
  </Router>
);