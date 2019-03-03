/* Component 	: Navigation is a Stateful Component
 * Created on	: 1/3/2019 22:22:34
 * Created by	: Vaibhav Shringarpure
 */

/* Import Statement Below */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
};

/* Stateful Component Class Below */
class Navigation extends Component {
  //Constructor Method below
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Define your Methods Here

  //Render Method returning JSX
  render() {
    return <div />;
  }
}

//Typechecking with PropTypes
Navigation.propTypes = propTypes; // from Line 11
Navigation.defaultProps = defaultProps; // from Line 17

export default Navigation;
