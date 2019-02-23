/* Component  : Test is a Functional Component
 * Created on : 23/2/2019 17:44:37
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';

/* Type Checking for PropTypes */
const propTypes = {
  // id: Proptypes.number.isRequired,
  // name: Proptypes.string,
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
};

/* Functional Component Function below */
const Test = props => {
  //Define your Methods Here

  //Returns JSX below
  return <div>Test</div>;
};

Test.propTypes = propTypes; // from Line 11
Test.defaultProps = defaultProps; // from Line 17

export default Test;
