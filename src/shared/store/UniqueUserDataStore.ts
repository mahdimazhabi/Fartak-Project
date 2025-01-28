import { create } from "zustand";
import { DataUser } from "../interfaces/AuthInterface";

interface DataUserStore {
  dataUser: DataUser[];
  setDataUser: (data: DataUser) => void;
}

export const useUniqueUserDataStore = create<DataUserStore>((set) => ({
  dataUser: [],
  setDataUser: (data) =>
    set((state) => ({ dataUser: [...state.dataUser, data] })),
}));
