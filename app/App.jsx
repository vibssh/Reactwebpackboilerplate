import React, { Component } from 'react';
import Styles from './scss/app.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={Styles['container-fluid']}>
          <div className={[Styles['row'], Styles['row--spacing']].join(' ')}>
            <div className={Styles['col-12']}>Hello World !</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
