import { Fragment, Component } from 'react';
import Aloha from '../Aloha';

class AlohaDashboard extends Component {
  mapAloha = (user) => (
    <Fragment key={user.id}>
      <Aloha name={`${user.firstName} ${user.lastName}`} />
    </Fragment>
  );

  render() {
    const { users } = this.props;

    return <div>{users.map(this.mapAloha)}</div>;
  }
}

export default AlohaDashboard;
