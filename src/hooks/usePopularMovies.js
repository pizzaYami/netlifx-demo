import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// hook을 분리하는 이유
// 1. 깔끔하다.
// 2. 비즈니스 로직과 ui를 분리해주는게 좋음

const fetchPopularMovies = () => {
  // 앞부분은 api에 정의해놓음  baseURL: "https://api.themoviedb.org/3",
  return api.get("/movie/popular");
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
    // 선택적 데이터받기
    select: (result) => result.data,
  });
};
