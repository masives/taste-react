import React from 'react';

class Searchbar extends React.Component {
  state = {
    name: '',
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    console.log(this.state.name);
    return (
      <label>
        Imię
        <input type="text" onChange={this.handleChange} value={this.state.name} />
      </label>
    );
  }
}

export default Searchbar;
