import { Suspense } from "react";
import Movies from "@/components/screen/Movies/Movies";

function SearchBarFallback() {
  return <></>;
}

const PageMovies = () => {
  return (
    <>
      <Suspense fallback={<SearchBarFallback />}>
        <Movies />
      </Suspense>
    </>
  );
};

export default PageMovies;
