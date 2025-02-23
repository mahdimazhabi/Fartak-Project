import { create } from "zustand";

interface TeacherDataByIdStore {
  id: string;
  setId: (newId: string) => void;
}

export const useTeacherDataByIdStore = create<TeacherDataByIdStore>((set) => ({
  id: "",
  setId: (newId) => set(() => ({ id: newId })),
}));
