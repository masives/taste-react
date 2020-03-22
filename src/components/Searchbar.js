import React from 'react';

class Searchbar extends React.Component {
  render() {
    const { name, surname, handleNameChange, handleSurnameChange } = this.props;
    return (
      <div>
        <label>
          Imię
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Nazwisko
          <input type="text" value={surname} onChange={handleSurnameChange} />
        </label>
      </div>
    );
  }
}

export default Searchbar;
