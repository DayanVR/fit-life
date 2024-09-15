import { fetchExercises } from "@/lib/data";
import { exercise } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default async function ExerciseList({
  limit,
  query,
  page,
  muscle,
}: {
  limit: number;
  query: string;
  page: number;
  muscle: string;
}) {
  const exercisesData: exercise[] = await fetchExercises({
    limit: limit,
    query: query,
    page: page,
    muscle: muscle,
  });

  const queryParams: Record<string, string | number> = {
    ...(limit && { limit }),
    ...(query && { query }),
    ...(page && { page }),
    ...(muscle && { muscle }),
  };
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {exercisesData.map((exercise) => {
        return (
          <Link
            href={{
              pathname: `/exercises/${exercise.id}`,
              query: queryParams,
            }}
            key={exercise.id}
            className="flex w-full flex-col rounded-lg bg-gray-400/60 p-3 transition-transform hover:scale-105"
          >
            <div className="relative h-52 w-full lg:h-52 xl:h-60">
              <Image
                priority
                src={`${process.env.NEXT_PUBLIC_URL}/imgs/${exercise.images[0]}`}
                alt={exercise.name}
                fill
                className="aspect-square rounded-md xl:aspect-video"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div>
              <h2 className="mt-4 text-balance text-2xl font-semibold xl:text-3xl">
                {exercise.name}
              </h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
