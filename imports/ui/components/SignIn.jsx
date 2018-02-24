import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import createHistory from 'history/createBrowserHistory'
import { Card, Form } from 'semantic-ui-react'

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      user: ""
    }
    this.history = createHistory();
  }

  componentWillReceiveProps(nextProps){
    if(Meteor.userId()){
      this.props.history.push("/")
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    const self = this;
    Meteor.loginWithPassword(this.state.user, this.state.password, (err, res) => {
      if (!err) {
        console.log("Hejsan")
      } else {
        if (err.error === 400) {

        }
        console.warn(err);
      }
    })
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    
    return (
      <Card centered>
        <Card.Content header="Sign in" />
        <Card.Content description={
          <Form>
            <Form.Input label="User" placeholder="Derp"/>
            <Form.Input label="Password" type="password" placeholder="Durp" />
          </Form>
        } />
      </Card>
    )
  }
}
