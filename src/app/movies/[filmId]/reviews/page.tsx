import Reviews from "@/components/Reviews/Reviews";
import type { IParamFilmId } from "@/types/typesParam";

interface iParam {
  params: IParamFilmId;
}

function Page({ params: { filmId } }: iParam) {
  // @ts-expect-error Async Server Component
  return <Reviews filmId={filmId} />;
}

export default Page;
