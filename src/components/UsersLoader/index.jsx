import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import { getUsers } from '../../api';

class UsersLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      error: null,
      currentPage: 1,
    };
  }

  componentDidMount () {
    const usersInString = localStorage.getItem('users');

    if (usersInString) {
      const parsedUsers = JSON.parse(usersInString);

      this.setState({ users: parsedUsers, isFetching: false });

      return;
    }
    this.load();
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.load();
    }
  }

  load = () => {
    const { currentPage } = this.state;

    getUsers({ page: currentPage, results: 50 })
      .then(data => {
        const { results } = data;

        this.setState({
          users: results,
        });

        const userStr = JSON.stringify(results);
        localStorage.setItem('users', userStr);
      })
      .catch(e => {
        this.setState({
          error: e.error,
        });
      })
      .finally(() => {
        this.setState({
          isFetching: false,
        });
      });
  };

  prevPage = () => this.setState({ currentPage: this.state.currentPage - 1 });
  nextPage = () => this.setState({ currentPage: this.state.currentPage + 1 });

  render () {
    const { users, isFetching, error } = this.state;
    return (
      <div>
        <h1>USER LIST</h1>
        <div>
          <button onClick={this.prevPage}>Prev page</button>
          <button onClick={this.nextPage}>Next page</button>
        </div>
        {isFetching && <Spinner />}
        {/*isFetching ? <div>LOADING...</div> : null*/}
        {error && <div>{JSON.stringify(error)}</div>}
        <ul>
          {users.map(user => {
            return (
              <li key={user.login.uuid}>{JSON.stringify(user, null, 4)}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

UsersLoader.propTypes = {};

export default UsersLoader;
