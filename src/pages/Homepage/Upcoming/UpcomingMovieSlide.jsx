import React from "react";
import Alert from "react-bootstrap/Alert";
import { useUpcomingMovies } from "../../../hooks/useUpcomingMovies";
import { responsive } from "../../../constants/responsiveConstant";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";

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
      <MovieSlider
        title="Popular Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
}

export default UpcomingMovieSlide;
