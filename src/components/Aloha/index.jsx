import { Component } from 'react';

class Aloha extends Component {
  constructor(props) {
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

  render() {
    const { isGreeting } = this.state;
    const { name, children, isExciting } = this.props;

    return (
      <div className='GREETING-ELEMENT'>
        <h1 className='heading' onClick={this.switchGreeting}>
          {isGreeting ? 'Привет' : 'До завтра'} {name} {isExciting ? '!' : '.'}
        </h1>
        {children}
        <button onClick={this.deleteHandler}>DELETE</button>
      </div>
    );
  }
}

export default Aloha;
