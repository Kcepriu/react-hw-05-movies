import React, { FC } from "react";
import type { IFilmInformation } from "@/types/typesFilms";
import GoBack from "@/components/GoBack/GoBack";
import NavAdditionalInformation from "@/components/NavAdditionalInformation/NavAdditionalInformation";
import Image from "next/image";
import styles from "./MovieDetails.module.scss";

interface IProps {
  filmInformation: IFilmInformation;
}

const MovieDetails: FC<IProps> = ({ filmInformation }) => {
  const {
    posterPath,
    original_title,
    releaseDate,
    voteAverage,
    overview,
    genresText,
  } = filmInformation;

  return (
    <>
      <GoBack>Go back</GoBack>
      <div className={styles.WrapMovieDetail}>
        <div className={styles.WrapImage}>
          <div className={styles.ContainerImage}>
            <Image
              className={styles.Image}
              src={filmInformation.posterPath}
              width={300}
              height={450}
              priority
              // fill={true}
              alt={filmInformation.original_title}
            />
          </div>
        </div>

        <div>
          <h1>{`${original_title} (${releaseDate})`}</h1>
          <p>{`User Score: ${voteAverage}%`}</p>
          <h2>Overviews</h2>
          <p>{overview}</p>
          <h2>Genders</h2>
          <p>{genresText}</p>
        </div>
      </div>
      <NavAdditionalInformation />
    </>
  );
};

export default MovieDetails;
