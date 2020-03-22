// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';
const message = 'Czekolada jest super!';
const message1 = 'Programowanie jest fajne';
const message2 = 'Ciastka są smaczne';
// klasa App (nazwa własna) dziedziczy od klasy Komponent, dzięki czemu mamy dostęp m.in. do funkcji render
class App extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    console.log(this.state.counter);
    return (
      <div className="App">
        <button
          onClick={() => {
            console.log('siemka');
          }}
        >
          Kliknij mnie
        </button>
        <button
          onClick={() => {
            console.log('bajbaj');
          }}
        >
          Nie klikaj we mnie
        </button>

        <p>{message}</p>
        <p>{message1}</p>
        <p>{message2}</p>

        <p>{this.state.counter}</p>
        {/* przycisk z konsolą */}
      </div>
      // 11:20
    );
  }
}

export default App;
