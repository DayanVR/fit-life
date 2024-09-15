import { exercise } from "./types";

export const fetchExercises = async ({
  limit = 12,
  query = "",
  page = 1,
  muscle = "",
}: {
  limit: number;
  query: string;
  page: number;
  muscle: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/exercises.json`,
    );
    const data = await response.json();

    let offset = (page - 1) * limit;
    let filteredData = data;

    if (query) {
      filteredData = data.filter((exercise: exercise) => {
        return exercise.name.toLowerCase().includes(query.toLowerCase());
      });
    }
    if (muscle) {
      filteredData = filteredData.filter((exercise: exercise) => {
        return exercise.primaryMuscles.includes(muscle.toLowerCase());
      });
    }

    const paginatedData = filteredData.slice(offset, offset + limit);
    return paginatedData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchExerciseLength = async ({
  query = "",
  limit = 12,
  muscle = "",
}: {
  query: string;
  limit: number;
  muscle: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/exercises.json`,
    );
    const data = await response.json();
    let filteredData = data;

    if (query) {
      filteredData = data.filter((exercise: exercise) => {
        return exercise.name.toLowerCase().includes(query.toLowerCase());
      });
    }
    if (muscle) {
      filteredData = filteredData.filter((exercise: exercise) => {
        return exercise.primaryMuscles.includes(muscle.toLowerCase());
      });
    }
    const totalPages = Math.ceil(filteredData.length / limit);

    return totalPages || 0;
  } catch (error) {
    console.error("Error fetching data:", error);
    return 0;
  }
};

export const fetchSingleExercise = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/exercises.json`,
    );
    const data = await response.json();
    const filteredData = data.filter((exercise: exercise) => {
      return exercise.id === id;
    });
    return filteredData[0];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// export const fetchAllMainMuscles = async () => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_URL}/exercises.json`,
//     );
//     const data = await response.json();
//     const allMuscles = data.flatMap(
//       (exercise: exercise) => exercise.primaryMuscles,
//     );
//     const uniqueMuscles = [...new Set(allMuscles)];
//     console.log("muscles", uniqueMuscles);
//     return allMuscles;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
