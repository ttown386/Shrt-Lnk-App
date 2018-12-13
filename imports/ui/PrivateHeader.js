import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { PropTypes } from 'prop-types';

// Stateless functional component
const PrivateHeader = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={()=> Accounts.logout()}>Logout</button>
    </div>
  );
};

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
}

PrivateHeader.defaultProps = {
  title : 'Default Title'
}

export default PrivateHeader;