import React from 'react';

class CounterButton extends React.Component {
  state = {
    counter: 0,
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  doubleCounter = () => {
    this.setState({ counter: this.state.counter * 2 });
  };

  render() {
    return (
      <div>
        <p>Stan licznika: {this.state.counter}</p>

        <button onClick={this.incrementCounter}>Dodaj 1</button>
        <button onClick={this.decrementCounter}>Odejmij 1</button>
        <br />
        <button onClick={this.doubleCounter}>Podwój tego wariacika!</button>
      </div>
    );
  }
}

export default CounterButton;
