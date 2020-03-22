// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';
import CounterButtons from './components/CounterButtons';
import User from './components/User';
import Searchbar from './components/Searchbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterButtons />
        <Searchbar />
        <User name="Józef" surname="Piecyk" />
        <User name="Emilia" surname="Piecyk" />
        <User name="Werka" surname="Rodo" />
        <User name="Masala" surname="Piesek" />
      </div>
    );
  }
}
// 12:55

export default App;
