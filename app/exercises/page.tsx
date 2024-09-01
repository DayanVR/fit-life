"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDebouncedCallback } from "use-debounce";
import { fetchExercises } from "@/app/lib/actions";

export default function page() {
  const handleSearch = useDebouncedCallback((value) => {
    fetchExercises({ limit: 20, offset: 0 })
      .then((data) => {
        console.log(data);
      })
  }, 500);

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <main className="flex-grow">
        <section className="h-full bg-black py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Discover Your Perfect Workout
            </h2>
            <p className="mb-8 text-xl">
              Explore our wide range of exercises tailored for every fitness
              level
            </p>
            <div className="justify-center space-x-4">
              <div className="mx-auto flex h-11 max-w-md items-center rounded-md bg-white px-3">
                <svg
                  className="mr-2 size-5 fill-gray-500"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                </svg>
                <input
                  className="mr-2 w-full text-black focus:outline-none"
                  placeholder="Search exercises..."
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              {/* <Button className="h-11" variant="secondary">Search</Button> */}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ExerciseCard
                title="Bench Press"
                description="Build chest strength and muscle"
                duration="10-15 mins"
                intensity="High"
              />
              <ExerciseCard
                title="Jogging"
                description="Improve cardiovascular health"
                duration="20-30 mins"
                intensity="Moderate"
              />
              <ExerciseCard
                title="Yoga Flow"
                description="Enhance flexibility and mindfulness"
                duration="30-45 mins"
                intensity="Low"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="text-muted-foreground container mx-auto px-4 text-center">
          <p>&copy; 2023 FitLife Exercises. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// function ExerciseCard({ title, description, duration, intensity }) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="flex items-center">{title}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <CardDescription>{description}</CardDescription>
//         <div className="flex justify-between text-sm">
//           <p>{duration}</p>
//           <p>{intensity}</p>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
