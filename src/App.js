// importujemy React by używać jsx i by móc użyć komponent
import React from 'react';
// tak możemy importować style
import './App.css';

// import CounterButton from './components/CounterButton';
import Searchbar from './components/Searchbar';
import UsersList from './components/UsersList';

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
