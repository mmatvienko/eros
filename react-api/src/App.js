// src/App.js
import React, { Component } from 'react';
import Contacts from './components/contacts';

class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    fetch('http://localhost:8063')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    )
  }
}

export default App;