import { fetchReviewsFromFilm } from "@/services/servicesFilms";
import type { IParamFilmId } from "@/types/typesParam";

const Reviews = async ({ filmId }: IParamFilmId) => {
  const information = await fetchReviewsFromFilm({ filmId });

  if (!information) {
    return null;
  }
  const reviews = information.results;

  if (reviews.length === 0) {
    return <p>We don&apos;t have any reviews for this movie.</p>;
  }

  return (
    <ul>
      {reviews.map((element) => {
        return (
          <li key={element.id}>
            <h4>Author: {element.author_details.username}</h4>
            <p>{element.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
