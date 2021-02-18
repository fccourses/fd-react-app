import React from 'react';
import PropTypes from 'prop-types';
import { userPropType } from './../UserList/UserCard';

const SelectedUserList = props => {
  const { users } = props;
  const filteredUsers = users.filter(u => u.isSelected);

  return (
    <div>
      {filteredUsers.map(user => (
        <span>
          {user.firstName} {user.lastName}
        </span>
      ))}
    </div>
  );
};

SelectedUserList.defaultProps = {
  users: [],
};

SelectedUserList.propTypes = {
  users: PropTypes.arrayOf(userPropType),
};

export default SelectedUserList;
