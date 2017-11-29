import React, { Component } from 'react';

export default class HelloContainer extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1 className="h1">Hello!</h1>
      </div>
    )
  }
}