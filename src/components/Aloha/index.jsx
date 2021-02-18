import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Aloha.module.scss';

class Aloha extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isGreeting: true,
    };
  }

  switchGreeting = () => {
    const { isGreeting } = this.state;
    this.setState({
      isGreeting: !isGreeting,
    });
  };

  deleteHandler = () => {
    const { deleteUser, id } = this.props;
    deleteUser(id);
  };

  render () {
    const { isGreeting } = this.state;
    const { name, isExciting } = this.props; // read-only info

    return (
      <div className={styles.container}>
        <h1 className='' onClick={this.switchGreeting}>
          {isGreeting ? 'Привет' : 'До завтра'} {name} {isExciting ? '!' : '.'}
        </h1>
        <button onClick={this.deleteHandler}>DELETE</button>
      </div>
    );
  }
}

Aloha.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isExciting: PropTypes.bool,
  deleteUser: PropTypes.func,
};

export default Aloha;
