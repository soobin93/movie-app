import React from "react";
import axios from "axios";

import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { results }} = await axios.get(`${process.env.REACT_APP_API_URL}/movie/popular`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY
      }
    });

    this.setState({
      isLoading: false,
      movies: results
    })
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        { isLoading
          ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map(movie => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    overview={movie.overview}
                    poster={movie.poster_path}
                    releaseDate={movie.release_date}
                  />
                ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;
