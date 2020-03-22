import React from 'react';

class User extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.name} {this.props.surname}
      </div>
    );
  }
}

export default User;
