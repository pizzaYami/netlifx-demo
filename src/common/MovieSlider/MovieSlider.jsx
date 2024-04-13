import React from "react";
import "./MovieSlider.style.css";
import MovieCard from "../MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MovieSlider({ title, movies, responsive }) {
  return (
    <div>
      <h3>{title}</h3>
      {movies && (
        <Carousel
          infinite
          centerMode
          swipeable
          itemClass="movie-slider p-10"
          className="carousel-container"
          responsive={responsive}
        >
          {movies?.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default MovieSlider;
