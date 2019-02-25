/* Component  : Card is a Functional Component
 * Created on : 24/2/2019 7:13:13 PM
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

/* Type Checking for PropTypes */
const propTypes = {
  // id: Proptypes.number.isRequired,
  // name: Proptypes.string,
  title: PropTypes.string
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
  title: 'I am default card title'
};

/* Functional Component Function below */
const Card = props => {
  //Define your Methods Here

  //Returns JSX below
  return (
    <div className={styles.card}>
      <h2>{props.title}</h2>
    </div>
  );
};

Card.propTypes = propTypes; // from Line 11
Card.defaultProps = defaultProps; // from Line 17

export default Card;
