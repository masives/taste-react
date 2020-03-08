import React from 'react';

class Searchbar extends React.Component {
  state = {
    name: '',
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    console.log(this.state.name);
    return (
      <label>
        Imię
        <input type="text" onChange={this.handleNameChange} value={this.state.name} />
      </label>
    );
  }
}

export default Searchbar;
