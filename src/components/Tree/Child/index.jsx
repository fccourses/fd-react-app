import React from 'react';
import { UserContext } from '../../../contexts';

const Child = props => {
  const styles = {
    border: '2px solid',
    padding: '20px',
  };

  return (
    <UserContext.Consumer>
      {user => (
        <div style={styles}>
          <div>CHILD</div>
          {JSON.stringify(user)}
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default Child;
