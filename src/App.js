import React from "react";
import axios from "axios";

import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    genres: []
  };

  getMovies = async () => {
    const { data: { results }} = await axios.get(`${process.env.REACT_APP_API_URL}/movie/popular`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY
      }
    });

    return results;
  };

  getGenres = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/genre/movie/list`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY
      }
    });

    return response.data.genres;
  };

  async componentDidMount() {
    const movies = await this.getMovies();
    const genres = await this.getGenres();

    this.setState({
      isLoading: false,
      movies,
      genres
    });
  }

  render() {
    const { isLoading, movies, genres } = this.state;

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
                    genreIds={movie.genre_ids}
                    genres={genres}
                  />
                ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;
