import React from "react";
import { fetchTrending } from "@/services/servicesFilms";
import MoviesList from "@/components/MoviesList/MoviesList";

async function Home() {
  const controller = new AbortController();

  const respond = await fetchTrending({ signal: controller.signal });

  return <>{respond && <MoviesList films={respond.results} />}</>;
}

export default Home;
