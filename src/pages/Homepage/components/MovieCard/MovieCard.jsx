import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import { useGenreList } from "../../../../hooks/useGenreList";
import starIcon from "../../../../assets/icon-star.svg";
import humanIcon from "../../../../assets/icon-humans.svg";
function MovieCard({ movie }) {
  const { data } = useGenreList();

  const getGenreNameById = (id) => {
    const genre = data?.genres.find((genre) => genre.id === id);
    return genre ? genre.name : "Unknown Genre";
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        {movie.genre_ids.map((id) => (
          <Badge bg="danger">{getGenreNameById(id)}</Badge>
        ))}
        <div className="cardDetail">
          <div>
            <img src={starIcon} alt="star" />
            {movie.vote_average}
          </div>
          <div>
            <img src={humanIcon} alt="human" />
            {movie.popularity}
          </div>
          <div>{movie.adult ? "over18" : "under18"}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
