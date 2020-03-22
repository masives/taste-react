// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';
import CounterButtons from './components/CounterButtons';
import User from './components/User';
import Searchbar from './components/Searchbar';

class UsersList extends React.Component {
  state = {
    users: [],
    loading: false,
  };
  componentDidMount = () => {
    this.setState({ loading: true });
    fetch('https://kuznia-kodu.pl/api/users')
      // przerób odpowiedź na json
      .then((data) => data.json())
      .then((data) => {
        const users = data.results;
        this.setState({ users: users });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.users.map((user) => {
          return <User name={user.first_name} surname={user.last_name} />;
        })}
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    name: '',
    surname: '',
    users: [],
    loading: false,
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSurnameChange = (event) => {
    this.setState({ surname: event.target.value });
  };
  // 15:26
  componentDidMount = () => {
    this.setState({ loading: true });
    fetch('https://kuznia-kodu.pl/api/users')
      // przerób odpowiedź na json
      .then((data) => data.json())
      .then((data) => {
        const users = data.results;
        this.setState({ users: users });
      })
      .finally(() => {
        this.setState({ loading: false });
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
        <UsersList />

        {/* {this.state.users
          .filter((user) => {
            return user.first_name.includes(this.state.name) && user.last_name.includes(this.state.surname);
          })
          .map((user, index) => {
            return <User key={index} name={user.first_name} surname={user.last_name} />;
          })} */}
      </div>
    );
  }
}
// 14:50

export default App;
