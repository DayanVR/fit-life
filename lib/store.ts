import { create } from "zustand";
import { exercise } from './types';
//elimina todo y solo deja totalPages y agrega darkMode y setDarkMode al store de zustand.

type Store = {
  exercise: {};
  setExercise: (exercise: exercise) => void;
  exercisesLimit: number;
  setExercisesLimit: (count: number) => void;
  totalPages: number;
  setTotalPages: (totalPages: number) => void;
}

export const useExercisesStore = create<Store>((set) => ({
  exercise: {},
  setExercise: (exercise) => set({ exercise: exercise }),
  exercisesLimit: 12,
  setExercisesLimit: (count: number) => set({ exercisesLimit: count }),
  totalPages: 1,
  setTotalPages: (totalPages: number) => set({ totalPages }),
}));
