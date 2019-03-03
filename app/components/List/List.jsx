/* Component  : List is a Functional Component
 * Created on : 2/3/2019 17:38:37
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
  listArray: PropTypes.array,
  listClassName: PropTypes.string,
  listLinkClassName: PropTypes.string
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
  listArray: [],
  listClassName: '',
  listLinkClassName: ''
};

/* Functional Component Function below */
const List = props => {
  //Define your Methods Here
  const itemList = props.listArray.map((list, index) => {
    const keyValue = list.id ? list.id : index;
    return (
      <li key={keyValue} className={props.listClassName}>
        <a href="#" title={list.key} className={props.listLinkClassName}>
          {list.key}
        </a>
      </li>
    );
  });

  //Returns JSX below
  return <React.Fragment>{itemList}</React.Fragment>;
};

List.propTypes = propTypes; // from Line 11
List.defaultProps = defaultProps; // from Line 17

export default List;
