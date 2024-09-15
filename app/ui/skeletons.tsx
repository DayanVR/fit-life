export const ExerciseSkeleton = () => (
  <div className="flex h-44 w-full justify-between rounded-lg p-4 bg-gray-400"></div>
);

export const ExerciseListSkeleton = (props: any) => (
  <div className={`relative overflow-hidden rounded-lg`} {...props}>
    <div className="grid animate-pulse grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3 ">
      <ExerciseSkeleton />
      <ExerciseSkeleton />
      <ExerciseSkeleton />
      <ExerciseSkeleton />
      <ExerciseSkeleton />
      <ExerciseSkeleton />
      <ExerciseSkeleton />
      <ExerciseSkeleton />
      <ExerciseSkeleton />
    </div>
  </div>
);
