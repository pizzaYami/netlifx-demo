import React from "react";
import Alert from "react-bootstrap/Alert";
import { useUpcomingMoviesQuery } from "../../../hooks/useUpcomingMovies";
import { responsive } from "../../../constants/responsiveConstant";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";

function UpcomingMovieSlide() {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="Upcoming Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
}

export default UpcomingMovieSlide;
