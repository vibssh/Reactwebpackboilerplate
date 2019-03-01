/* Component  : Cat is a Functional Component
 * Created on : 1/3/2019 13:41:46
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
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

/* Functional Component Function below */
const Cat = props => {
  //Define your Methods Here

  //Returns JSX below
  return <div />;
};

Cat.propTypes = propTypes; // from Line 11
Cat.defaultProps = defaultProps; // from Line 17

export default Cat;
