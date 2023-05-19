"use client";

import { FormEvent, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import MovieFoundList from "@/components/MovieFoundList/MovieFoundList";
import styles from "./Movies.module.scss";

interface CustomElements extends HTMLFormControlsCollection {
  searchFilm: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

function Movies() {
  const searchParams = useSearchParams();
  const nameFilms = searchParams.get("nameFilms") || "";

  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const onSubmitForm = (event: FormEvent<CustomForm>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const value = form.elements.searchFilm.value;
    if (value === nameFilms) return;
    const newPathName =
      pathname +
      (value === "" ? "" : "?" + createQueryString("nameFilms", value));
    form.reset();
    router.push(newPathName);
  };

  return (
    <>
      <div className={styles.Wrapper}>
        <form onSubmit={onSubmitForm} className={styles.FormSearch}>
          <input
            className={styles.Input}
            name="searchFilm"
            type="text"
            autoComplete="on"
            autoFocus
            placeholder="Search films"
          />
          <button type="submit" className={styles.Button}>
            Search
          </button>
        </form>
      </div>
      {nameFilms && (
        // @ts-expect-error Async Server Component
        <MovieFoundList nameFilms={nameFilms} />
      )}
    </>
  );
}

export default Movies;
