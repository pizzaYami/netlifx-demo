import React from "react";

import Banner from "./components/Banner/Banner";
function Homepage() {
  return (
    <div>
      <Banner></Banner>
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
