// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';
import CounterButtons from './components/CounterButtons';
import User from './components/User';
import Searchbar from './components/Searchbar';

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
        const users = data.results;
        this.setState({ users: users });
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

        {this.state.users
          .filter((user) => {
            return user.first_name.includes(this.state.name) && user.last_name.includes(this.state.surname);
          })
          .map((user, index) => {
            return <User key={index} name={user.first_name} surname={user.last_name} />;
          })}
      </div>
    );
  }
}
// 14:50

export default App;
