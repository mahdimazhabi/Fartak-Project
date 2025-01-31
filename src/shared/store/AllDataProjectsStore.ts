import { create } from "zustand";
import { getList } from "../interfaces/ProjectInterface";

interface getListStore {
  dataProjects: getList[];
  setDataProjects: (data: getList[]) => void;
}

export const useDataProjectStore = create<getListStore>((set) => ({
  dataProjects: [],
  setDataProjects: (data) => set({ dataProjects: data }),
}));
