import { Component } from 'react';
import Aloha from '../Aloha';

class AlohaDashboard extends Component {
  render() {
    const { users } = this.props;

    const liArray = users.map((user) => {
      return (
        <li>
          <Aloha name={`${user.firstName} ${user.lastName}`}>
            <div>
              <span>{user.id}</span>
            </div>
            <p>
              <span>{user.id}</span>
            </p>
          </Aloha>
        </li>
      );
    });

    return <ul>{liArray}</ul>;
  }
}
export default AlohaDashboard;
