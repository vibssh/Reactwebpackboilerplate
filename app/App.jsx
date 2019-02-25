import React, { Component } from 'react';

import Card from './components/Card/Card';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome to React Boilerplate</h1>
        <Card />
      </React.Fragment>
    );
  }
}

export default App;
