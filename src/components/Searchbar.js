import React from 'react';

class Searchbar extends React.Component {
  render() {
    const { name, handleNameChange, surname, handleSurnameChange } = this.props;
    return (
      <div>
        <label>
          Imię
          <input type="text" onChange={handleNameChange} value={name} />
        </label>
        <br />
        <label>
          Nazwisko
          <input type="text" onChange={handleSurnameChange} value={surname} />
        </label>
      </div>
    );
  }
}

export default Searchbar;
