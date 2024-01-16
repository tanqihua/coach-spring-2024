import { create } from "zustand";

export const useThreeStore = create((set) => ({
  threeObject: [],
  addThreeObject: (object) =>
    set((state) => ({ threeObject: [...state.threeObject, object] })),
  changePosition: (index, position) =>
    set((state) => {
      const threeObject = [...state.threeObject];
      threeObject[index] = position;
      return { threeObject };
    }),
}));
