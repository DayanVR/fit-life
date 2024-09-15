import { Suspense } from "react";
import ExerciseList from "../ui/exercise/exercise-list";
import Search from "../ui/exercise/search";
import SelectLimit from "../ui/exercise/select-limit";
import Pagination from "../ui/exercise/pagination";
import SelectMuscle from "../ui/exercise/muscles/select-muscle";
import { ExerciseListSkeleton } from "../ui/skeletons";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    limit?: string;
    page?: string;
    query?: string;
    muscle?: string;
  };
}) {
  let limit = parseInt(searchParams?.limit || "12");
  let query = searchParams?.query || "";
  let page = parseInt(searchParams?.page || "1");
  let muscle = searchParams?.muscle || "";
  if (limit != 12 && limit != 24 && limit != 36 && limit != 48) {
    limit = 12;
  }

  return (
    <main>
      <section className="h-full bg-black py-20 text-white">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold text-balance">
            Discover Your Perfect Workout
          </h2>
          <p className="mb-8 text-xl text-pretty">
            Explore our wide range of exercises tailored for every fitness level
          </p>

          <div>
            <Search placeholder="Search exercises..." />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-fit rounded-lg bg-gray-400/60 p-2">
            <SelectLimit />
          </div>
          <div className="w-full md:w-fit rounded-lg bg-gray-400/60 p-1.5">
            <SelectMuscle />
          </div>
        </div>

        <Suspense key={query + limit} fallback={<ExerciseListSkeleton />}>
          <ExerciseList {...{ limit, query, page, muscle }} />
        </Suspense>

        <Pagination
          currentPage={page}
          query={query}
          limit={limit}
          muscle={muscle}
        />
      </section>
    </main>
  );
}
