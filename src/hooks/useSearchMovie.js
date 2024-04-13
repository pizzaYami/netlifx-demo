import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = ({ sort, genre, page, keyword }) => {
  const baseUrl = keyword ? `/search/movie` : `/discover/movie`;
  const queryParameters = [];

  // 쿼리 키워드가 있는 경우, 검색 쿼리를 추가
  if (keyword) {
    queryParameters.push(`query=${encodeURIComponent(keyword)}`);
  }

  // 공통 쿼리 파라미터 추가
  queryParameters.push(`page=${page}`);
  queryParameters.push(`sort_by=${sort}`);

  // 장르가 있을 경우만 장르 파라미터를 추가
  if (genre) {
    queryParameters.push(`with_genres=${genre}`);
  }

  // 완성된 URL
  const url = `${baseUrl}?${queryParameters.join("&")}`;

  return api.get(url);
};

export const useSearchMovieQuery = ({ sort, genre, page, keyword }) => {
  return useQuery({
    queryKey: ["movie-search", { sort, genre, page, keyword }],
    queryFn: () => fetchSearchMovie({ sort, genre, page, keyword }),
    select: (result) => result.data,
  });
};
