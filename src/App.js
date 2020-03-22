// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';

// klasa App (nazwa własna) dziedziczy od klasy Komponent, dzięki czemu mamy dostęp m.in. do funkcji render
class App extends React.Component {
  state = {
    counter: 10,
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log(this.state.counter);
    return (
      <div className="App">
        <p>Obecny stan licznika to: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Dodaj 1</button>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter - 1 });
          }}
        >
          Odejmij 1
        </button>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter * 2 });
          }}
        >
          Podwój
        </button>
      </div>
    );
  }
}

export default App;
