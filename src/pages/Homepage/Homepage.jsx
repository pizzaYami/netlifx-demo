import React from "react";
import PopularMovieSlilde from "./components/PopularMovieSlide/PopularMovieSlilde";
import Banner from "./components/Banner/Banner";
import TopRatedSlide from "./components/TopRatedSlide/TopRatedSlide";
import UpcomingMovieSlide from "./Upcoming/UpcomingMovieSlide";

function Homepage() {
  return (
    <div>
      <Banner />
      <PopularMovieSlilde />
      <TopRatedSlide />
      <UpcomingMovieSlide />
    </div>
  );
}

export default Homepage;

/**
 * 배너 => api로 popoula 영화를 들고와서 첫번째 아이템을 보여주자
 * popular movie
 * top rated movie
 * upcoming movie
 */
