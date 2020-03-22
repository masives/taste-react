import React from 'react';
import User from './User';

class UsersList extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    fetch('https://kuznia-kodu.pl/api/users')
      // przerób odpowiedź na json
      .then((data) => data.json())
      .then((data) => {
        const users = data.results;
        this.setState({ users: users });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    return this.state.loading ? (
      <div>Ładuję listę użytkowników</div>
    ) : (
      <div>
        {this.state.users
          .filter((user) => {
            return user.first_name.includes(this.props.name) && user.last_name.includes(this.props.surname);
          })
          .map((user) => {
            return <User key={user.id} name={user.first_name} surname={user.last_name} />;
          })}
      </div>
    );
  }
}

export default UsersList;
