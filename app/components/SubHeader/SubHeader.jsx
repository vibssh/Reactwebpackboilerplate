/* Component  : SubHeader is a Functional Component
 * Created on : 3/3/2019 16:38:27
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';

import data from './SubHeader-data.yaml';

import Styles from './SubHeader.scss';

import List from '../List/List';

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
const SubHeader = props => {
  //Define your Methods Here

  //Returns JSX below
  return (
    <ul className={Styles.subheader}>
      <List
        listArray={data.subheader}
        listClassName={Styles.subheaderList}
        listLinkClassName={Styles.subheaderLink}
      />
    </ul>
  );
};

SubHeader.propTypes = propTypes; // from Line 11
SubHeader.defaultProps = defaultProps; // from Line 17

export default SubHeader;
