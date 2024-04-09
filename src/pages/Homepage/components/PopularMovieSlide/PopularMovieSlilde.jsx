import React from "react";
import Alert from "react-bootstrap/Alert";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { responsive } from "../../../../constants/responsiveConstant";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
function PopularMovieSlilde() {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

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

export default PopularMovieSlilde;
