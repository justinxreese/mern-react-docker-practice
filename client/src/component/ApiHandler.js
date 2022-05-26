import React from "react";

export default class ApiHandler extends React.Component {
  state = {
    api_text: ''
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/', {mode: 'cors'})
      .then(response => response.text())
      .then(text => this.setState({api_text: text}));
  }

  render() {
    return (
      <p>Hello {this.state.api_text}</p>
    )
  }
}
