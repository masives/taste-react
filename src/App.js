// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';

// import CounterButton from './components/CounterButton';
import User from './components/User';
import Searchbar from './components/Searchbar';

const users = [
  { name: 'Józef', surname: 'Piecyk' },
  { name: 'Emilia', surname: 'Piecyk' },
  { name: 'Masala', surname: 'Piecyk' },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        {users.map((user) => {
          return <User name={user.name} surname={user.surname} />;
        })}
      </div>
    );
  }
}

export default App;
