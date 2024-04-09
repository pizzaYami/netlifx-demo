import React from "react";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import Alert from "react-bootstrap/Alert";
import { responsive } from "../../../../constants/responsiveConstant";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";

function TopRatedSlide() {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="Top Rated Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
}

export default TopRatedSlide;
