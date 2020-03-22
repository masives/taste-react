import React from 'react';

class User extends React.Component {
  render() {
    const { name, surname } = this.props;
    return (
      <div>
        {name} {surname}
      </div>
    );
  }
}

export default User;
