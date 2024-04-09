import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchGenreList = () => {
  return api.get("/genre/movie/list");
};

export const useGenreListQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchGenreList,
    select: (result) => result.data,
    // 업데이트 잘 안되도 되는 값이라 300000ms(5분)동안 값 그대로 가져오겠다.
    staleTime: 300000,
  });
};
