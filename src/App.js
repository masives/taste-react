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

// 15:07

class App extends React.Component {
  state = {
    name: '',
    surname: '',
    users: [],
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSurnameChange = (event) => {
    this.setState({ surname: event.target.value });
  };

  componentDidMount = () => {
    console.log('zamontowałem się');
    fetch('https://kuznia-kodu.pl/api/users')
      // przerób odpowiedź na json
      .then((data) => data.json())
      .then((data) => {
        // wyświetl dane
        console.log({ data });
        const users = data.results;
        // zapisać do stanu users
      });
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
            return <User key={index} name={user.name} surname={user.surname} />;
          })}
      </div>
    );
  }
}
// 14:50

export default App;
