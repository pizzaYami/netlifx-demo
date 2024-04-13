import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import { useGenreListQuery } from "../hooks/useGenreList";
import starIcon from "../assets/icon/icon-star.svg";
import humanIcon from "../assets/icon/icon-humans.svg";

import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const { data } = useGenreListQuery();

  const getGenreNameById = (id) => {
    const genre = data?.genres.find((genre) => genre.id === id);
    return genre ? genre.name : "Unknown Genre";
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}` +
          ")",
      }}
      className="movie-card"
      onClick={() => navigate(`/movies/${movie?.id}`)}
    >
      <div className="overlay">
        <h1>{movie?.title}</h1>
        <div className="badges">
          {movie.genre_ids &&
            movie?.genre_ids.map((id) => (
              <Badge bg="danger" key={id}>
                {getGenreNameById(id)}
              </Badge>
            ))}
        </div>
        <div className="cardDetail">
          <div>
            <img src={starIcon} alt="star" />
            {movie?.vote_average}
          </div>
          <div>
            <img src={humanIcon} alt="human" />
            {movie?.popularity}
          </div>
          <div>{movie?.adult ? "over18" : "under18"}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
