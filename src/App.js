// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';

// klasa App (nazwa własna) dziedziczy od klasy Komponent, dzięki czemu mamy dostęp m.in. do funkcji render
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Uczę się react</h1>
          <p>Powoli zaczyna to wchodzić</p>
          <b>Ale zaraz będzie grubo</b>
        </div>
      </div>
    );
  }
}

export default App;
