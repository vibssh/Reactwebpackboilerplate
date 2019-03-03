import React, { Component } from 'react';
import Styles from './App.scss';
import Header from './components/Header/Header';

//import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className={Styles['container-fluid']}>
          <div className={[Styles['row'], Styles['row--spacing']].join(' ')}>
            <div className={Styles['col-sm-4']}>Navigation</div>
            <div className={Styles['col-sm-8']}>Content</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

// ToDo Work on the Navigation List - Its an array of Object so how will we use
// the same list component
