import { create } from "zustand";
import { DataUser } from "../interfaces/AuthInterface";

interface DataUserState {
  dataUser: DataUser[];
  setDataUser: (data: DataUser) => void;
}

export const useDataUser = create<DataUserState>((set) => ({
  dataUser: [],
  setDataUser: (data) =>
    set((state) => ({ dataUser: [...state.dataUser, data] })),
}));
