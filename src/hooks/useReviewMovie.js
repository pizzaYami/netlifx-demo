import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchReviewMovie = ({ id }) => {
  return api.get(`/movie/${id}/reviews`);
};

export const useReviewMovie = ({ id }) => {
  return useQuery({
    queryKey: ["mobie-review", id],
    queryFn: () => fetchReviewMovie({ id }),
    select: (result) => result.data,
  });
};
