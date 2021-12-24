/* eslint react/prop-types: 0 */
import React from "react";

import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <section className="movie-container">
          <h1 id="movie-title">{location.state.title}</h1>
          <div className="movie-details">
            <img
              alt={location.state.title}
              className="movie-details__poster"
              src={location.state.poster}
            />
            <div className="movie-details__text">
              <span>{location.state.year}</span>
              <div className="text__genres">
                {location.state.genres.map((genre) => {
                  return <span key={genre}>{genre}</span>;
                })}
              </div>
              <p className="text__summary">{location.state.summary}</p>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
