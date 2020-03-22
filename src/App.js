// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';
import CounterButtons from './components/CounterButtons';

// 12:14

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterButtons />
      </div>
    );
  }
}

export default App;
