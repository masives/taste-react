import React from 'react';
import User from './User';

const LIMIT = 20;

class UsersList extends React.Component {
  state = {
    users: [],
    loading: false,
    pagesCount: 0,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    fetch('https://kuznia-kodu.pl/api/users')
      // przerób odpowiedź na json
      .then((data) => data.json())
      .then((data) => {
        const users = data.results;
        const pagesCount = Math.ceil(data.count / LIMIT);
        this.setState({ users: users, pagesCount: pagesCount });
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
        <div>Liczba stron: {this.state.pagesCount}</div>
      </div>
    );
  }
}

export default UsersList;
