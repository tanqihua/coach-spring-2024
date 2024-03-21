import { create } from "zustand";
import { language } from "../overlay/language";
export const useStore = create((set) => ({
  point: {},
  addPoint: (point, num) =>
    set((state) => ({
      point: { ...state.point, [num]: point },
    })),

  info: {
    bagColor: "purpleVideo",
    tagType: "/2d/T_lover.png",
    name : ""
  },

  setInfo: (_info) =>
    set((state) => ({
      info: { ...state.info, ..._info },
    })),

  playAnimation: false,
  setplayAnimation: (value) => set({ playAnimation: value }),

  language: language["en"],

  setLanguage: (lan) => set({ language: language[lan] }),
}));
