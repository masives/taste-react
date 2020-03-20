import React from 'react';
import User from './User';

class UsersList extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  componentDidMount = () => {
    //  zaciągnij dane z api
    this.setState({ loading: true });
    fetch('https://kuznia-kodu.pl/api/users')
      // przerób odpowiedź na json
      .then((data) => data.json())
      .then((data) => {
        // wyświetl dane
        this.setState({ users: data });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { name, surname } = this.props;
    return (
      <div>
        {this.state.users
          .filter((user) => user.first_name.includes(name))
          .filter((user) => user.last_name.includes(surname))
          .map((user) => {
            return <User key={user.id} name={user.first_name} surname={user.last_name} />;
          })}
      </div>
    );
  }
}

export default UsersList;
