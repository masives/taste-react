// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';

// import CounterButton from './components/CounterButton';
import UsersList from './components/UsersList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UsersList />
      </div>
    );
  }
}

export default App;
