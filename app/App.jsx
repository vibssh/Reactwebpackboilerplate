import React, { Component } from 'react';
import './scss/app.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row row--spacing">
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
