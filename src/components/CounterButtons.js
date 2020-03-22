import React from 'react';

class CounterButtons extends React.Component {
  state = {
    counter: 8,
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
        <h2>Obecnie na liczniku mamy liczbę: {this.state.counter}</h2>
        <button onClick={this.incrementCounter}>Dodaj 1</button>
        <button onClick={this.decrementCounter}>Odejmij 1</button>
        <button onClick={this.doubleCounter}>Podwój</button>
      </div>
    );
  }
}

export default CounterButtons;
