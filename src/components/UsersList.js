import React from 'react';
import User from './User';

class UsersList extends React.Component {
  state = {
    users: [],
    loading: false,
    pagesCount: 0,
    currentPage: 0,
  };

  handleFetchUsers = () => {
    const { currentPage } = this.state;

    this.setState({ loading: true });
    fetch(`https://kuznia-kodu.pl/api/users?limit=20&offset=${currentPage * 20}`)
      // przerób odpowiedź na json
      .then((data) => data.json())
      .then((data) => {
        this.setState({ users: data.results, pagesCount: data.count });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  componentDidMount = () => {
    //  zaciągnij dane z api
    this.handleFetchUsers();
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.handleFetchUsers();
    }
  }

  render() {
    const { loading, users } = this.state;
    const { name, surname } = this.props;
    return loading ? (
      <div>Ładuje się...</div>
    ) : (
      <div>
        {users
          .filter((user) => user.first_name.includes(name))
          .filter((user) => user.last_name.includes(surname))
          .map((user) => {
            return <User key={user.id} name={user.first_name} surname={user.last_name} />;
          })}
        <div>
          <p>Obecna strona: {this.state.currentPage}</p>
          <button
            onClick={() => {
              this.setState({ currentPage: this.state.currentPage + 1 });
            }}
          >
            Następna strona >
          </button>
        </div>
        <p>Ilość stron: {this.state.pagesCount}</p>
      </div>
    );
  }
}

export default UsersList;
