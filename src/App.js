// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';
import CounterButtons from './components/CounterButtons';
import User from './components/User';
import Searchbar from './components/Searchbar';

const users = [
  { name: 'Juzek', surname: 'Piecyk' },
  { name: 'Emilia', surname: 'Piecyk' },
  { name: 'Masala', surname: 'Piesek' },
];

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

        {users.map((user) => {
          console.log(user);
          return <p>{user.name}</p>;
        })}
      </div>
    );
  }
}
// 13:48

export default App;
