import { HttpRequest, HttpResponse } from "@baseplate/mongodb";

export const route = "/ratings/:movieId";

export function get(req: HttpRequest, res: HttpResponse) {
  res.json({
    movieId: req.params.movieId,
    rating: Math.floor(Math.random() * 5) + 1,
  });
}
