import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DarkModeState {
  isDarkMode: boolean;
  toggle: () => void;
  setDarkMode: (value: boolean) => void;
}

export const useDarkMode = create<DarkModeState>()(
  persist(
    (set) => ({
      isDarkMode: true,
      toggle: () => {
        // اضافه کردن log

        set((state) => ({ isDarkMode: !state.isDarkMode }));
      },
      setDarkMode: (value: boolean) => set(() => ({ isDarkMode: value })),
    }),
    {
      name: "dark-mode", // key used to store the state in localStorage
    }
  )
);
