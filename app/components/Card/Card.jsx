/* Component  : Card is a Functional Component
 * Created on : 27/2/2019 15:06:31
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';

import data from './data.yaml';
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
const Card = props => {
  //Define your Methods Here
  console.log('data', data);

  //Returns JSX below
  return <div />;
};

Card.propTypes = propTypes; // from Line 11
Card.defaultProps = defaultProps; // from Line 17

export default Card;
