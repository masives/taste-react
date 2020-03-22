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
  state = {
    name: '',
    surname: '',
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSurnameChange = (event) => {
    this.setState({ surname: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Searchbar
          name={this.state.name}
          surname={this.state.surname}
          handleNameChange={this.handleNameChange}
          handleSurnameChange={this.handleSurnameChange}
        />

        {users
          .filter((user) => {
            return user.name.includes(this.state.name) && user.surname.includes(this.state.surname);
          })
          .map((user, index) => {
            console.log(user);
            return <User key={index} name={user.name} surname={user.surname} />;
          })}
      </div>
    );
  }
}
// 14:50

export default App;
