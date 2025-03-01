import { create } from "zustand";

interface TypeIdStore {
  id: number;
  setIdType: (id: number) => void;
}

export const useTypeIdStore = create<TypeIdStore>()((set) => ({
  id: 0,
  setIdType: (id) => set(() => ({ id })),
}));
