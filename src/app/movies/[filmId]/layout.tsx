import { ReactNode } from "react";
import MovieDetails from "@/components/screen/MovieDetails/MovieDetails";
import type { IParamFilmId } from "@/types/typesParam";
import {
  fetchFullInformationFromFilm,
  addInformationFromFilm,
} from "@/services/servicesFilms";

interface iParam {
  params: IParamFilmId;
  children: ReactNode;
}

const LayoutMovieId = async ({ params: { filmId }, children }: iParam) => {
  const filmInformation = await fetchFullInformationFromFilm({ filmId });

  if (!filmInformation) return null;

  const fullFilmInformation = await addInformationFromFilm(filmInformation);

  return (
    <>
      {filmInformation && (
        <MovieDetails filmInformation={fullFilmInformation} />
      )}

      <div>{children}</div>
    </>
  );
};

export default LayoutMovieId;
// /movies/id
// /movies/id/actors
// /movies/id/gengers
