import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTrailerMovies = ({ id }) => {
  return api.get(`/movie/${id}/videos`);
};

export const useTrailerMovie = ({ id }) => {
  return useQuery({
    queryKey: ["movie-trailer", id],
    queryFn: () => fetchTrailerMovies({ id }),
    select: (result) => result.data,
  });
};
