// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';

// import CounterButton from './components/CounterButton';
import User from './components/User';
import Searchbar from './components/Searchbar';

class UsersList extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  componentDidMount = () => {
    //  zaciągnij dane z api
    this.setState({ loading: true });
    fetch('https://kuznia-kodu.pl/api/users')
      // przerób odpowiedź na json
      .then((data) => data.json())
      .then((data) => {
        // wyświetl dane
        this.setState({ users: data.results });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { name, surname } = this.props;
    return (
      <div>
        {this.state.users
          .filter((user) => user.first_name.includes(name))
          .filter((user) => user.last_name.includes(surname))
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
    const { name, surname } = this.state;
    return (
      <div className="App">
        <Searchbar
          name={this.state.name}
          handleNameChange={this.handleNameChange}
          surname={this.state.surname}
          handleSurnameChange={this.handleSurnameChange}
        />
        <UsersList name={name} surname={surname} />
      </div>
    );
  }
}

export default App;
