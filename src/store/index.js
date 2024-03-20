import { create } from "zustand";
import { language } from "../overlay/language";
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

  language: language["kr"],

  setLanguage: (lan) => set({ language: language[lan] }),
}));
