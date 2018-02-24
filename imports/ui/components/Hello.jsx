import React, { Component } from 'react';
import { Card, Form } from 'semantic-ui-react'

export default class HelloContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    console.log(this.props)
    console.log(Meteor.userId())
    if(!Meteor.userId()){
      console.log("wtf push?")
      this.props.history.push("/signin")
    }
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    )
  }
}