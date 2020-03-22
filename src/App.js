// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';
import CounterButtons from './components/CounterButtons';
import User from './components/User';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterButtons />
        <User name="Józef" />
        <User name="Emilia" />
        <User name="Werka" />
        <User name="Masala" />
      </div>
    );
  }
}
// 12:55

export default App;
