// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';

// import CounterButton from './components/CounterButton';
import User from './components/User';
import Searchbar from './components/Searchbar';

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

  componentDidMount = () => {
    //  zaciągnij dane z api
    this.setState({ loading: true });
    fetch('https://kuznia-kodu.pl/api/users')
      // przerób odpowiedź na json
      .then((data) => data.json())
      .then((data) => {
        // wyświetl dane
        this.setState({ users: data });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    console.log({ loading: this.state.loading });
    return (
      <div className="App">
        <Searchbar
          name={this.state.name}
          handleNameChange={this.handleNameChange}
          surname={this.state.surname}
          handleSurnameChange={this.handleSurnameChange}
        />
        <h1>Stan ładowania: {this.state.loading.toString()}</h1>
        {this.state.users
          .filter((user) => user.first_name.includes(this.state.name))
          .filter((user) => user.last_name.includes(this.state.surname))
          .map((user) => {
            return <User key={user.id} name={user.first_name} surname={user.last_name} />;
          })}
      </div>
    );
  }
}

export default App;
