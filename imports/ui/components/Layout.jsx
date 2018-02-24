import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{marginTop:"55px"}}>
        <Container>
          {this.props.children}
        </Container>
      </div>
    )
  }
}