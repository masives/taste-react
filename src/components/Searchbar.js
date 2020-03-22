import React from 'react';

class Searchbar extends React.Component {
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
      <div>
        <label>
          Imię
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          Nazwisko
          <input type="text" value={this.state.surname} onChange={this.handleSurnameChange} />
        </label>
        <div>Obecny name to: {this.state.name}</div>
        <div>Obecny surname to : {this.state.surname}</div>
      </div>
    );
  }
}

export default Searchbar;
