import { create } from "zustand";
import authStorage, { langToIndex } from "../auth/storage";
import { Promo } from "../utils/constants";

interface BearState {
  language: keyof typeof langToIndex;
  setLanguage: (language: keyof typeof langToIndex) => void;
  activePromo: Promo | null;
  setActivePromo: (promo: Promo | null) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  language: "en",
  setLanguage: (language) => {
    authStorage.setLanguage(language);
    set({ language });
  },
  activePromo: null,
  setActivePromo: (promo) => set({ activePromo: promo }),
}));
