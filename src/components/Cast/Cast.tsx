import { fetchCreditsFromFilm } from "@/services/servicesFilms";
import type { IParamFilmId } from "@/types/typesParam";
import Image from "next/image";
import noPhoto from "@/images/no_photo.png";
import styles from "./Cast.module.scss";

const Cast = async ({ filmId }: IParamFilmId) => {
  const credits = await fetchCreditsFromFilm({ filmId });

  if (!credits) {
    return null;
  }

  const { cast, url_to_image } = credits;

  return (
    <>
      <ul className={styles.List}>
        {cast.map((element) => {
          return (
            <li key={element.cast_id}>
              {element.profile_path ? (
                <Image
                  src={`${url_to_image}${element.profile_path}`}
                  alt="No photo acthor"
                  width={174}
                  height={290}
                  className={styles.Image}
                />
              ) : (
                <Image src={noPhoto} alt="No photo acthor" />
              )}
              <p>{element.name}</p>
              <p>{element.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;

//https://api.themoviedb.org/3/movie/{movie_id}/credits
