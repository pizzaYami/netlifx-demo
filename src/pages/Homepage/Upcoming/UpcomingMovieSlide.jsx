import React from "react";
import Alert from "react-bootstrap/Alert";
import Carousel from "react-multi-carousel";
import { useUpcomingMovies } from "../../../hooks/useUpcomingMovies";
import { responsive } from "../../../constants/responsiveConstant";
import MovieCard from "../components/MovieCard/MovieCard";

function UpcomingMovieSlide() {
  const { data, isLoading, isError, error } = useUpcomingMovies();

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <h3>Popular Movies</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-10"
        className="carousel-container"
        responsive={responsive}
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
}

export default UpcomingMovieSlide;
