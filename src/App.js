// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';

// klasa App (nazwa własna) dziedziczy od klasy Komponent, dzięki czemu mamy dostęp m.in. do funkcji render
class App extends React.Component {
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
      <div className="App">
        <p>Obecny stan licznika to: {this.state.counter}</p>
        <button onClick={this.decrementCounter}>Odejmij 1</button>
        <button onClick={this.incrementCounter}>Dodaj 1</button>
        <br />
        <button onClick={this.doubleCounter}>Podwój tego wariacika!</button>
      </div>
    );
  }
}

export default App;
