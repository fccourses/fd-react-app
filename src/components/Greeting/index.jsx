import { Component } from 'react';

class Aloha extends Component {
  render() {
    const { name, photo, isGreeting } = this.props;
    console.log(isGreeting)
    return (
      <div className='GREETING-ELEMENT'>
        <h1 className='heading'>
          {isGreeting ? 'Привет' : 'До завтра'} {name}
        </h1>
        <img src={photo} alt={name} />
      </div>
    );
  }
}

export default Aloha;
