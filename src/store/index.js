import { create } from "zustand";

export const useStore = create((set) => ({
  point: {},
  addPoint: (point, num) =>
    set((state) => ({
      point: { ...state.point, [num]: point },
    })),

  info: {
    firstName: "",
    bagColor: "",
    url: undefined,
  },

  setInfo: (_info) =>
    set((state) => ({
      info: { ...state.info, ..._info },
    })),

  playAnimation: false,
  setplayAnimation: (value) => set({ playAnimation: value }),
}));
