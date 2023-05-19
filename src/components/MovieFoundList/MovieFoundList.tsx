import { searchFilm } from "@/services/servicesFilms";
import Link from "next/link";
import { nameRouters } from "@/constants/constantNameRoute";

interface IProps {
  nameFilms: string;
}

const MovieFoundList = async ({ nameFilms }: IProps) => {
  const films = await searchFilm(nameFilms);

  if (!films) return;

  return (
    <ul>
      {films.map((element) => {
        return (
          <li key={element.id}>
            <Link href={`${nameRouters.movies}/${element.id}`}>
              {" "}
              {element.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieFoundList;
