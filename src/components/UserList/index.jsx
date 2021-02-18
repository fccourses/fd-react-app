import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserCard, { userPropType } from './UserCard';

class UserList extends Component {
  userSelector = id => {
    const { users, setUsers } = this.props;
    const newUsers = [...users]; // Поверхностная копия

    const mapNewUsers = user => ({
      ...user,
      isSelected: id === user.id ? !user.isSelected : user.isSelected,
    });

    setUsers(newUsers.map(mapNewUsers));
  };

  mapUsers = user => (
    <UserCard key={user.id} user={user} userSelector={this.userSelector} />
  );

  render () {
    const { users } = this.props;
    return (
      <section>
        <h1>USER LIST FROM DB</h1>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(userPropType).isRequired,
  setUsers: PropTypes.func,
};

export default UserList;
