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
    console.log(this.state.name);
    return (
      <div>
        <label>
          Imię
          <input type="text" onChange={this.handleNameChange} value={this.state.name} />
        </label>
        <br />
        <label>
          Nazwisko
          <input type="text" onChange={this.handleSurnameChange} value={this.state.surname} />
        </label>
      </div>
    );
  }
}

export default Searchbar;
