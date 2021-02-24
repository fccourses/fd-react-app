import React, { Component } from 'react';

class PhoneList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      phones: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount () {
    this.setState({ isFetching: true });
    fetch('/phones.json')
      .then(res => res.json())
      .then(phones => this.setState({ phones, isFetching: false }))
      .catch(e => this.setState({ isFetching: false, error: e }));
  }

  render () {
    const { phones, isFetching, error } = this.state;
    if (isFetching) {
      return <div>LOading...</div>;
    }
    if (error) {
      return <div>{error.message}</div>;
    }
    return (
      <ul>
        {phones.map(phone => {
          return (
            <li key={phone.id}>
              <h1>{phone.name}</h1>
              <p>{phone.price}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PhoneList;
