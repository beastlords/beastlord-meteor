import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import createHistory from 'history/createBrowserHistory'


export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      user: ""
    }
    this.history = createHistory();
  }

  submitForm = (e) => {
    e.preventDefault();
    const self = this;
    Meteor.loginWithPassword(this.state.user, this.state.password, (err, res) => {
      if (!err) {
        console.log("Hejsan")
        self.history.push('/');
      } else {
        if (err.error === 400) {
          alert("Placeholder för snygg notification\nAnvändarnamn(email?) eller lösenord var felaktigt...")
        }
        console.warn(err);
      }
    })
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    if (Meteor.userId) {
      this.history.push("/");
    }
    return (
      <form className="form" onSubmit={this.submitForm}>
        <input name="user" placeholder="Användare" className="form-control" value={this.state.user} onChange={this.handleInputChange} />
        <input name="password" placeholder="Lösenord" value={this.state.password} onChange={this.handleInputChange} />
        <input type="submit" className="btn" value="Sign in" />
      </form>
    )
  }
}
