import { fetchSingleExercise } from "../../../lib/data";
import Image from "next/image";
import { exercise } from "@/lib/types";
import Link from "next/link";
import ImageToggle from "@/app/ui/imageToggle";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: {
    query?: string;
    muscle?: string;
    limit?: string;
    page?: string;
  };
}) {
  const { id } = params;
  const exerciseId = Array.isArray(id) ? id[0] : id;
  const exercise: exercise = await fetchSingleExercise(exerciseId);

  return (
    <div className="container space-y-8 px-4 py-10">
      <Link
        href={{
          pathname: "/exercises",
          query: searchParams,
        }}
        className="rounded-lg bg-gray-400/60 p-4 text-xl font-semibold"
      >
        Back
      </Link>
      <div className="lg:flex lg:gap-x-8 ">
        <div className="flex justify-center">
          <ImageToggle images={exercise.images} name={exercise.name} />
        </div>
        <div className="flex-grow">
          <h1 className="text-balance max-lg:mt-6 mb-4 text-4xl font-bold xl:text-5xl">
            {exercise.name}
          </h1>
          <div className="max-md:space-y-4 md:grid md:grid-cols-2 md:gap-y-6 xl:gap-y-10 ml-2 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:lg:text-3xl [&_p]:text-xl [&_p]:lg:text-2xl">
            {exercise.level && (
              <div>
                <h2>Difficulty:</h2>
                <p>{exercise.level}</p>
              </div>
            )}
            {exercise.category && (
              <div>
                <h2>Category:</h2>
                <p>{exercise.category}</p>
              </div>
            )}
            {exercise.primaryMuscles.length > 0 && (
              <div>
                <h2>Main muscles:</h2>
                <p>{exercise.primaryMuscles.join(", ")}</p>
              </div>
            )}
            {exercise.equipment && (
              <div>
                <h2>Equipment:</h2>
                <p>{exercise.equipment}</p>
              </div>
            )}
            {exercise.mechanic && (
              <div>
                <h2>Mechanic:</h2>
                <p>{exercise.mechanic}</p>
              </div>
            )}
            {exercise.force && (
              <div>
                <h2>Force:</h2>
                <p>{exercise.force}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {exercise.instructions.length > 0 && (
        <div className="mr-20">
          <h2 className="my-2 text-2xl font-semibold lg:text-3xl xl:my-4">
            Instructions
          </h2>
          <ul className="space-y-4 text-pretty text-xl lg:space-y-6 lg:text-2xl">
            {exercise.instructions.map((instruction) => (
              <li className="list-inside list-decimal" key={instruction}>
                {instruction}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
