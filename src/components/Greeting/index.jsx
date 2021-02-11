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

  render() {
    const { isGreeting } = this.state;
    const { name, photo } = this.props;

    return (
      <div className='GREETING-ELEMENT'>
        <h1 className='heading' onClick={this.switchGreeting}>
          {isGreeting ? 'Привет' : 'До завтра'} {name}
        </h1>
        <img src={photo} alt={name} />
      </div>
    );
  }
}

export default Aloha;
