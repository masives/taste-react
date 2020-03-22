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
        <User />
      </div>
    );
  }
}

export default App;
