import React, { useState, useEffect } from 'react';
import { getUsers } from 'api';
import { useData, useClicker } from 'hooks';

const Loader = props => {
  const { data: users, error, isFetching } = useData(getUsers);
  const count = useClicker();

  console.log(count);

  return (
    <ol>
      {isFetching && <li>Loading...</li>}
      {error && <li>{error.message}</li>}
      {users.map((u, index) => (
        <li key={index}>{JSON.stringify(u, null, 4)}</li>
      ))}
    </ol>
  );
};

export default Loader;
