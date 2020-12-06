import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, overview, poster, releaseDate, genreIds, genres }) {
    const POSTER_WIDTH = 200;

    // Get Poster Path
    const posterPath = poster
        ? process.env.REACT_APP_IMAGE_URL + poster
        : null;

    // Get Genre Names
    let genreNames = [];

    genres.forEach(genre => {
        if (genreIds.includes(genre.id)) {
            genreNames.push(genre.name);
        }
    });

    return (
        <div className="movie">
            {posterPath && (
                <img src={posterPath} alt={title} title={title} width={POSTER_WIDTH} />
            )}
            <div className="movie__data">
                <h3 className="movie__title">{ title }</h3>
                <h5 className="movie__release-date">{ releaseDate }</h5>
                <ul className="genres">
                    {genreNames.map((genreName, index) =>
                        <li key={index} className="genres__genre">
                            { genreName }
                        </li>
                    )}
                </ul>
                <p className="movie__overview">{ overview.slice(0, 180) }...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    poster: PropTypes.string,
    releaseDate: PropTypes.string.isRequired,
    genreIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    genres: PropTypes.array.isRequired
}

export default Movie;
