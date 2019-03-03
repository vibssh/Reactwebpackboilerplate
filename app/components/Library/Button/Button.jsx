/* Component  : Button is a Functional Component
 * Created on : 3/3/2019 19:16:41
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Button.scss';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
  buttonClassName: ''
};

/* Functional Component Function below */
const Button = props => {
  //Define your Methods Here

  //Returns JSX below
  return (
    <button
      className={[Styles[props.buttonClassName], Styles['button-link']].join(
        ' '
      )}
    >
      {props.buttonText}
    </button>
  );
};

Button.propTypes = propTypes; // from Line 11
Button.defaultProps = defaultProps; // from Line 17

export default Button;
