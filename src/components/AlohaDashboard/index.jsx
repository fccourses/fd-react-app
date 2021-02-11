import { Component } from 'react';
import Aloha from '../Greeting';

class AlohaDashboard extends Component {
  render() {
    const { firstName, lastName, url } = this.props;
    return (
      <>
        <Aloha name={firstName} photo={url} />
        <Aloha name='Eugene' photo={url} />
        <Aloha name='Masha' photo={url} />
      </>
    );
  }
}
export default AlohaDashboard;
