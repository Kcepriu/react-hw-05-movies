import React, { FC } from "react";
import Link from "next/link";

import type { IFilmInfo } from "@/types/typesFilms";
type propsMovieList = {
  films: IFilmInfo[];
};

const MoviesList: FC<propsMovieList> = ({ films }) => {
  return (
    <ul>
      {films.map((element) => {
        return (
          <li key={element.id}>
            <Link href={`/movies/${element.id}`}>{element.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
