import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSimilarMovies = ({ id }) => {
  return api.get(`/movie/${id}/similar`);
};

export const useSimilarMovies = ({ id }) => {
  return useQuery({
    queryKey: ["movie-recommend", id],
    queryFn: () => fetchSimilarMovies({ id }),
    select: (result) => result.data,
  });
};
