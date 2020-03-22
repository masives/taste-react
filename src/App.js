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
  { name: 'Adam', surname: 'Brodo' },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        {users
          .filter((user) => {
            return user.surname.includes('sek');
          })
          .map((user) => {
            console.log(user);
            return <User name={user.name} surname={user.surname} />;
          })}
      </div>
    );
  }
}
// 14:02

export default App;
