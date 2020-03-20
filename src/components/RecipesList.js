import React from 'react';

const LIMIT = 20;

class RecipesList extends React.Component {
  state = {
    recipes: [],
    pagesCount: 0,
    currentPage: 0,
    search: '',
    loading: false,
  };

  fetchRecipes = () => {
    const { search } = this.state;
    this.setState({ loading: true });
    fetch(`https://kuznia-kodu.pl/api/recipes?search=${search}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          recipes: data.results,
          pagesCount: Math.ceil(data.count / LIMIT),
        });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    this.fetchRecipes();
  }

  componentDidUpdate(prevProps, prevState) {
    const searchChanged = prevState.search !== this.state.search;
    const pageChanged = prevState.currentPage !== this.state.currentPage;
    if (searchChanged || pageChanged) {
      this.fetchRecipes();
    }
  }

  render() {
    const { loading, recipes, search, currentPage, pagesCount } = this.state;
    return (
      <div>
        <h1>Recipe search</h1>
        <label>
          <input
            value={search}
            onChange={(event) => {
              this.setState({ search: event.target.value });
            }}
          />
        </label>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {recipes.map((recipe) => {
                return (
                  <div key={recipe.name}>
                    <h3>{recipe.name}</h3>
                    <object data={recipe.image} type="image/png" />
                    <div>
                      <a href={recipe.url} target="_blank">
                        Link
                      </a>
                    </div>
                    <p>{recipe.description}</p>
                  </div>
                );
              })}
              <p>Obecna strona: {currentPage}</p>
              <button
                onClick={() => {
                  this.setState({ currentPage: currentPage - 1 });
                }}
                disabled={currentPage === 0}
              >
                {'<'} Poprzednia strona
              </button>
              <button
                onClick={() => {
                  this.setState({ currentPage: currentPage + 1 });
                }}
                disabled={currentPage === pagesCount}
              >
                Następna strona >
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default RecipesList;
