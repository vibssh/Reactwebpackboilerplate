/* Component 	: Navigation is a Stateful Component
 * Created on	: 1/3/2019 22:22:34
 * Created by	: Vaibhav Shringarpure
 */

/* Import Statement Below */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from '../List/List';

import data from './Navigation.yaml';

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
    const ListItems = data.navigation.list;
    console.log(ListItems);
    return (
      <ul>
        <List listArray={ListItems} />
      </ul>
    );
  }
}

//Typechecking with PropTypes
Navigation.propTypes = propTypes; // from Line 11
Navigation.defaultProps = defaultProps; // from Line 17

export default Navigation;
