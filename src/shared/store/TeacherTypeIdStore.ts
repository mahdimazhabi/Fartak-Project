import { create } from "zustand";

interface TeacherTypeIdStore {
  id: string;
  setId: (newId: string) => void;
}

export const useTeacherTypeIdStore = create<TeacherTypeIdStore>()((set) => ({
  id: "",
  setId: (newId) => set(() => ({ id: newId })),
}));
