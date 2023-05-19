export interface IFilmInfo {
  id: number;
  adult: boolean;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IListFilms {
  page: number;
  results: IFilmInfo[];
  total_pages: number;
  total_results: number;
}

export interface IGenres {
  id: number;
  name: string;
}

export interface IFilmDetail {
  poster_path: string;
  backdrop_path: string;
  overview: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genres: IGenres[];
  homepage: string;
  id: number;
  imdb_id: string;
  budget: number;
  original_language: string;
  popularity: number;
  status: string;
  tagline: string;
  title: string;
}

export interface IFilmInformation extends IFilmDetail {
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
  genresText: string;
}

type TBackdropSizes = "w300" | "w780" | "w1280" | "original";
type TLogoSizes =
  | "w45"
  | "w92"
  | "w154"
  | "w185"
  | "w300"
  | "w500"
  | "original";

type TPosterSizes =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";

export interface IConfigurationImage {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: TBackdropSizes[];
  logo_sizes: TLogoSizes[];
  poster_sizes: TPosterSizes[];
}

export interface ICastFilm {
  adult: Boolean;
  gender: number;
  id: number;
  known_for_department: String;
  name: String;
  original_name: String;
  popularity: number;
  profile_path: String;
  cast_id: number;
  character: String;
  credit_id: String;
  order: number;
}

export interface ICreditsFilm {
  id: number;
  cast: ICastFilm[];
  url_to_image: string;
}

interface IAuthorDetails {
  name: string;
  username: string;
  avatar_path: string;
  rating: string | null;
}

export interface IReviewFilm {
  author: string;
  author_details: IAuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface IReviewsFilm {
  id: number;
  page: number;
  results: IReviewFilm[];
  total_pages: number;
  total_results: number;
}

export interface IFoundFilm {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IFoundFilms {
  page: number;
  results: IFoundFilm[];
  total_pages: number;
  total_results: number;
}
