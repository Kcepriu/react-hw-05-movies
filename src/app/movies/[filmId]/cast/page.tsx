import Cast from "@/components/Cast/Cast";
import type { IParamFilmId } from "@/types/typesParam";

interface iParam {
  params: IParamFilmId;
}

function Page({ params: { filmId } }: iParam) {
  // @ts-expect-error Async Server Component
  return <Cast filmId={filmId} />;
}

export default Page;
