import React from 'react';

class User extends React.Component {
  render() {
    const { name, surname } = this.props;
    return (
      <div style={{ fontSize: '20px', marginBottom: '10px' }}>
        {name} {surname}
      </div>
    );
  }
}

export default User;
