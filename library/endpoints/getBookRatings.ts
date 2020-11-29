import {HttpRequest, HttpResponse} from '@baseplate/mongodb'

export const route = '/ratings/:bookId'

export function get(req: HttpRequest, res: HttpResponse) {
  res.json({
    bookId: req.params.bookId,
    rating: Math.floor(Math.random() * 5) + 1,
  })
}
