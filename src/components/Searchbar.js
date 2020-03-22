import React from 'react';

// 13:20
// 13:30
class Searchbar extends React.Component {
  state = {
    name: '',
  };

  handleNameChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <label>
          Imię
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <div>Obecny name to: {this.state.name}</div>
      </div>
    );
  }
}

export default Searchbar;
