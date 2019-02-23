/* Component  : ComponentName is a Functional Component
 * Created on : date
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';

/* Type Checking for PropTypes */
const propTypes = {
  // id: Proptypes.number.isRequired,
  // name: Proptypes.string,
}

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
}


/* Functional Component Function below */
const ComponentName = (props) => {

	//Define your Methods Here

  
  //Returns JSX below
  return (
		<div></div>
	)
}

ComponentName.propTypes = propTypes; // from Line 11
ComponentName.defaultProps = defaultProps; // from Line 17

export default ComponentName;