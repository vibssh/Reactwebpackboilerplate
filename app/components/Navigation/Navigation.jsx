/* Component  : Navigation is a Functional Component
 * Created on : 28/2/2019 09:18:41
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';

import Data from './Navigation-data.yaml';

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
const Navigation = props => {
  //Define your Methods Here
  const data = Data.navigation.list;

  const navList = data.map(d => {
    console.log(d);
    return <li key="d.id">{d.name}</li>;
  });
  //Returns JSX below
  return <ul>{navList}</ul>;
};

Navigation.propTypes = propTypes; // from Line 11
Navigation.defaultProps = defaultProps; // from Line 17

export default Navigation;
