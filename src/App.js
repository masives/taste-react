// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';

// klasa App (nazwa własna) dziedziczy od klasy Komponent, dzięki czemu mamy dostęp m.in. do funkcji render
class App extends React.Component {
  render() {
    return (
      <div className="App">
        Hello world
        <button
          onClick={() => {
            console.log('siemka');
          }}
        >
          kliknij mnie
        </button>
      </div>
    );
  }
}

export default App;
