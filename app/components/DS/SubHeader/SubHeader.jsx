/* Component  : SubHeader is a Functional Component
 * Created on : 3/3/2019 16:38:27
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';

import data from './SubHeader-data.yaml';

import Styles from './SubHeader.scss';

import List from '../../Library/List/List';

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

export default SubHeader;
