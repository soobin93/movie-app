import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, overview, poster, releaseDate }) {
    const posterPath = poster
        ? process.env.REACT_APP_IMAGE_URL + poster
        : null;

    return (
        <div className="movie">
            {posterPath && (
                <img src={posterPath} alt={title} title={title} width={200} />
            )}
            <div className="movie__data">
                <h3 className="movie__title">{ title }</h3>
                <h5 className="movie__release-date">{ releaseDate }</h5>
                <p className="movie__overview">{ overview }</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    poster: PropTypes.string,
    releaseDate: PropTypes.string.isRequired
}

export default Movie;
