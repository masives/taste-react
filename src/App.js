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
  { name: 'Masala', surname: 'Bibsin' },
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
          handleNameChange={this.handleNameChange}
          surname={this.state.surname}
          handleSurnameChange={this.handleSurnameChange}
        />
        {users
          .filter((user) => user.name.includes(this.state.name))
          .filter((user) => user.surname.includes(this.state.surname))
          .map((user) => {
            return <User name={user.name} surname={user.surname} />;
          })}
      </div>
    );
  }
}

export default App;
