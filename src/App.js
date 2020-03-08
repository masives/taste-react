// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';

// import CounterButton from './components/CounterButton';
import User from './components/User';
import Searchbar from './components/Searchbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <User name="Józef" surname="Piecyk" />
        <User name="Emilia" surname="Piecyk" />
        <User name="Masala" surname="Piecyk" />
      </div>
    );
  }
}

export default App;
