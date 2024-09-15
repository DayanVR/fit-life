import ExerciseCard from "./ui/exercise/exerciseCard";
import {
  Yoga,
  Swimmer,
  Bike,
  Heart,
  PersonRunning,
  Dumbbell,
} from "./icons/icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background flex flex-col ">
        <section className="h-full bg-black py-20">
        <div className="dark container mx-auto bg-black px-4 text-center text-white">
          <h2 className="mb-4 text-4xl font-bold text-balance">
            Discover Your Perfect Workout
          </h2>
          <p className="mb-8 text-xl text-pretty">
            Explore our wide range of exercises tailored for every fitness level
          </p>
          <Link
            href={"/exercises"}
            className="inline-flex h-11 items-center justify-center rounded-md bg-slate-900 px-8 py-2 text-sm font-medium hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:ring-offset-slate-950 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300"
          >
            Get started
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Exercise Categories
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ExerciseCard
              icon={<Dumbbell />}
              title="Strength Training"
              description="Build muscle and increase strength"
            />
            <ExerciseCard
              icon={<PersonRunning />}
              title="Cardio"
              description="Improve heart health and endurance"
            />
            <ExerciseCard
              icon={<Yoga />}
              title="Flexibility"
              description="Enhance mobility and reduce stress"
            />
            <ExerciseCard
              icon={<Swimmer />}
              title="Swimming"
              description="Low-impact full body workout"
            />
            <ExerciseCard
              icon={<Bike />}
              title="Cycling"
              description="Boost stamina and leg strength"
            />
            <ExerciseCard
              icon={<Heart />}
              title="HIIT"
              description="Burn fat with high intensity intervals"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
