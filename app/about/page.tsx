import Card from "../ui/exercise/exerciseCard";
import { Heart, Dumbbell, UserFriends, Trophy } from "../icons/icons";

export default function Page() {
  return (
    <div className="flex flex-col">
      <section className="h-full bg-black py-20">
        <div className="dark container mx-auto bg-black px-4 text-center text-white">
          <h2 className="mb-4 text-4xl text-balance font-bold">About FitLife Exercises</h2>
          <p className="mb-8 text-xl text-pretty">
            Empowering individuals to achieve their fitness goals
          </p>
        </div>
      </section>

      <section className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-4 text-3xl text-balance font-semibold">Our Mission</h3>
            <p className="mb-8 text-lg lg:text-xl xl:text-2xl text-pretty">
              At FitLife Exercises, we're committed to making fitness
              accessible, enjoyable, and effective for everyone. Our mission is
              to provide high-quality, diverse exercise routines and expert
              guidance to help you achieve your personal health and fitness
              goals.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card
              classStyle="flex-col text-center"
              icon={<Dumbbell className="size-10 my-1.5" />}
              title="Expert-Designed Workouts"
              description="Our exercises are crafted by certified fitness professionals to ensure effectiveness and safety."
            />
            <Card
              classStyle="flex-col text-center"
              icon={<Heart className="size-10 my-1.5" />}
              title="Holistic Approach"
              description="We focus on overall well-being, combining physical exercise with mental health practices."
            />
            <Card
              classStyle="flex-col text-center"
              icon={<UserFriends className="size-10 my-1.5" />}
              title="Inclusive Community"
              description="Join a supportive community of fitness enthusiasts from all walks of life."
            />
            <Card
              classStyle="flex-col text-center"
              icon={<Trophy className="size-10 my-1.5" />}
              title="Goal-Oriented Programs"
              description="Tailored programs to help you reach your specific fitness objectives."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
