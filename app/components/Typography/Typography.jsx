/* Component  : Typography is a Functional Component
 * Created on : 2/3/2019 17:06:19
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';

import List from '../List/List';

import data from './Typography-data.yaml';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
  style: PropTypes.object.isRequired
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
};

/* Functional Component Function below */
const Typography = props => {
  //Define your Methods Here

  //Returns JSX below
  return (
    <React.Fragment>
      <h1>Heading Level 1</h1>
      <h2>Heading Level 2</h2>
      <h3>Heading Level 3</h3>
      <h4>Heading Level 4</h4>
      <hr />
      <p>Normal Paragraph</p>
      <p className={props.style.lead}>Lead Paragraph</p>
      <hr />
      <ul>
        <List listArray={data.fruits} />
      </ul>
      <hr />
      <ul className={props.style.bulleted}>
        <List listArray={data.numbers} />
      </ul>
      <hr />
      <ol>
        <List listArray={data.names} />
      </ol>
      <hr />
      <a href="http://google.co.uk" target="_blank" rel="noopener noreferrer">
        I am a Link
      </a>
    </React.Fragment>
  );
};

Typography.propTypes = propTypes; // from Line 11
Typography.defaultProps = defaultProps; // from Line 17

export default Typography;
