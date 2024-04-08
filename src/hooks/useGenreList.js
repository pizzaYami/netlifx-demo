import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchGenreList = () => {
  return api.get("/genre/movie/list");
};

export const useGenreList = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchGenreList,
    select: (result) => result.data,
  });
};
