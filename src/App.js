// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';

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
        <h2>Obecnie na liczniku mamy: {this.state.counter}</h2>
        <button onClick={this.incrementCounter}>Dodaj 1</button>
        <button onClick={this.decrementCounter}>Odejmij 1</button>
        <button onClick={this.doubleCounter}>Podwój</button>
      </div>
    );
  }
}

// 12:14

class App extends React.Component {
  state = {
    counter: 10,
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
    console.log(this.state.counter);
    return (
      <div className="App">
        <p>Obecny stan licznika to: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Dodaj 1</button>
        <button onClick={this.decrementCounter}>Odejmij 1</button>
        <button onClick={this.doubleCounter}>Podwój</button>
        <CounterButtons />
        <CounterButtons />
      </div>
    );
  }
}

export default App;
