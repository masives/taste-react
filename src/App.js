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
    console.log(this.props);
    return (
      <div>
        {this.state.users
          .filter((user) => {
            return user.first_name.includes(this.props.name) && user.last_name.includes(this.props.surname);
          })
          .map((user) => {
            return <User key={user.id} name={user.first_name} surname={user.last_name} />;
          })}
      </div>
    );
  }
}

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
        <UsersList name={this.state.name} surname={this.state.surname} />
      </div>
    );
  }
}
// 14:50

export default App;
