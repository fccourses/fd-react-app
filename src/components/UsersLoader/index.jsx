import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UsersLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      isError: false,
      currentPage: 1,
    };
  }

  componentDidMount () {
    this.load();
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.load();
    }
  }

  load = () => {
    const { currentPage } = this.state;
    fetch(
      `https://randomuser.me/api/?page=${currentPage}&results=10&seed=FD2020-2`
    )
      .then(res => res.json())
      .then(data => {
        const { results } = data;
        this.setState({
          users: results,
        });
      })
      .catch(() => {
        this.setState({
          isError: true,
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
    const { users, isFetching, isError } = this.state;
    return (
      <div>
        <h1>USER LIST</h1>
        <div>
          <button onClick={this.prevPage}>Prev page</button>
          <button onClick={this.nextPage}>Next page</button>
        </div>
        {isFetching && <div>LOADING...</div>}
        {/*isFetching ? <div>LOADING...</div> : null*/}
        {isError && <div>ERROR</div>}
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
