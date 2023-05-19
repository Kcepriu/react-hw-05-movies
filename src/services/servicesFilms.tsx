import type {
  IListFilms,
  IFilmDetail,
  IFilmInformation,
  IGenres,
  IConfigurationImage,
  ICreditsFilm,
  IReviewsFilm,
  IFoundFilm,
} from "@/types/typesFilms";

import type { IParamFilmId } from "@/types/typesParam";

// process.env.DATA_API_KEY,
const URL = "https://api.themoviedb.org/3";
const TOKKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTQ3ZjhjODNlODMwYmVkNzhkNGExZTExMTE4YzJkMCIsInN1YiI6IjYzYjZlZjZlZjA0ZDAxMDBjZmM5NDBiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zh5N3NXUWVK9iECT009XdsQye9ZLaHRrEYAC8cRxenU";

interface IParamTrending {
  signal: AbortSignal;
  page?: number;
  time_window?: "day" | "week";
}

let configImages: IConfigurationImage | null;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getCommonOption = (method: string): RequestInit => {
  return {
    method: method,
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + TOKKEN,
      // cache: "no-store",
      // next: { revalidate: 10 },
    },
  };
};

export const fetchTrending = async ({
  signal,
  page = 1,
  time_window = "day",
}: IParamTrending): Promise<IListFilms | null> => {
  // URL
  const fullUrl = `${URL}/trending/movie/${time_window}?language=en-US&page=${page}`;

  const options = getCommonOption("GET");

  // await delay(2000);
  const res = await fetch(fullUrl, options);

  // Recommendation: handle errors
  if (!res.ok) {
    console.log("Failed to fetch data");
    return null;
  }

  return res.json();
};

export const fetchFullInformationFromFilm = async ({
  filmId,
}: IParamFilmId): Promise<IFilmDetail | null> => {
  // URL
  const fullUrl = `${URL}/movie/${filmId}`;

  const options = getCommonOption("GET");

  const res = await fetch(fullUrl, options);

  // Recommendation: handle errors
  if (!res.ok) {
    console.log("Failed to fetch data");
    return null;
  }

  return res.json();
};

const fetchConfiguration = async (): Promise<IConfigurationImage | null> => {
  const fullUrl = `${URL}/configuration`;

  const options = getCommonOption("GET");

  const res = await fetch(fullUrl, options);

  // Recommendation: handle errors
  if (!res.ok) {
    console.log("Failed to fetch data");
    return null;
  }

  const result = await res.json();

  return result.images;
};

const getConfigurationImages =
  async (): Promise<IConfigurationImage | null> => {
    if (configImages) return configImages;

    configImages = await fetchConfiguration();

    return configImages;
  };

const getUrlImage = async (size: string): Promise<string> => {
  const configurationImages = await getConfigurationImages();

  if (!configurationImages) return "";

  return `${configurationImages.base_url}${size}`;
};

const getGendeText = (ganres: IGenres[]): string => {
  const gendeText = ganres.reduce((gendeText, element) => {
    return (gendeText += (gendeText === "" ? "" : ", ") + element.name);
  }, "");

  return gendeText;
};

export const addInformationFromFilm = async (
  filmInformation: IFilmDetail
): Promise<IFilmInformation> => {
  const { poster_path, release_date, vote_average, genres } = filmInformation;

  const posterPath = await getUrlImage("w342");

  const genresText = getGendeText(genres);

  const fullInfornation = {
    ...filmInformation,
    posterPath: `${posterPath}${poster_path}`,
    releaseDate: release_date.slice(0, 4),
    voteAverage: Math.ceil(Number(vote_average) * 10),
    genresText,
  };

  return fullInfornation;
};

export const fetchCreditsFromFilm = async ({
  filmId,
}: IParamFilmId): Promise<ICreditsFilm | null> => {
  const fullUrl = `${URL}/movie/${filmId}/credits`;

  const options = getCommonOption("GET");

  const res = await fetch(fullUrl, options);
  const url_to_image = await getUrlImage("w185");

  // Recommendation: handle errors
  if (!res.ok) {
    console.log("Failed to fetch data");
    return null;
  }

  const result = await res.json();

  result.url_to_image = url_to_image;

  return result;
};

export const fetchReviewsFromFilm = async ({
  filmId,
}: IParamFilmId): Promise<IReviewsFilm | null> => {
  const fullUrl = `${URL}/movie/${filmId}/reviews`;

  const options = getCommonOption("GET");

  const res = await fetch(fullUrl, options);

  // Recommendation: handle errors
  if (!res.ok) {
    console.log("Failed to fetch data");
    return null;
  }

  const result = await res.json();

  return result;
};

export const searchFilm = async (
  nameFilms: string,
  page = 1
): Promise<IFoundFilm[] | null> => {
  const fullUrl = `${URL}/search/movie?page=${page}&query=${nameFilms}`;

  const options = getCommonOption("GET");

  const res = await fetch(fullUrl, options);

  // Recommendation: handle errors
  if (!res.ok) {
    console.log("Failed to fetch data");
    return null;
  }

  const result = await res.json();

  return result.results;
};
