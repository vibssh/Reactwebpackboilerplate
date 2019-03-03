/* Component  : Header is a Functional Component
 * Created on : 3/3/2019 15:08:35
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyles from './Header.scss';
import Icon from '../../../assets/icons/Logo.svg';

import SubHeader from '../SubHeader/SubHeader';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
  title: PropTypes.string
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
  title: 'Design System'
};

/* Functional Component Function below */
const Header = props => {
  //Define your Methods Here

  //Returns JSX below
  return (
    <React.Fragment>
      <header className={HeaderStyles.header}>
        <img src={Icon} alt={props.title} className={HeaderStyles.logo} />
        <h3 className={HeaderStyles.title}>{props.title}</h3>
      </header>

      <SubHeader />
    </React.Fragment>
  );
};

Header.propTypes = propTypes; // from Line 11
Header.defaultProps = defaultProps; // from Line 17

export default Header;
