export type ParamType = {
  s?: string
  i?: string
  type: string
  y: string
  plot: string
  page: number
}

export type Movie = {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export type IFormInputs = {
  search: string
  type: string | null
  year: string | null
  plot: string | null
}
