import React, { Component } from 'react';
import './scss/app.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Hello World !</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
