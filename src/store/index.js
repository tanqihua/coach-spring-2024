import { create } from "zustand";

export const useStore = create((set) => ({
  point: {},
  addPoint: (point, num) =>
    set((state) => ({
      point: { ...state.point, [num]: point },
    })),

  info: {},
  addInfo: (info) =>
    set((state) => ({
      info: { ...state.info, ...info },
    })),
}));
