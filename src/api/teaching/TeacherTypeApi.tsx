import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useTeacherTypeIdStore } from "@/shared/store/TeacherTypeIdStore";
import { getDataTeachertype } from "@/shared/interfaces/TeacherIInterface";
export const useTeacherTypeApi = () => {
  const { id } = useTeacherTypeIdStore();

  const { data, isLoading, refetch } = useQuery<getDataTeachertype[]>({
    queryKey: ["TeacherTypeDataAll"],
    queryFn: async () => {
      const response = await axios.post(
        "https://www.backend.fartakproject.ir/api/TeacherTypes/GetAll",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.teacherTypes;
    },
  });

  const {
    data: listTeacherTypeDataById,
    isLoading: listTeacherTypeLoadingById,
  } = useQuery({
    queryKey: ["TeacherTypeDataById", id],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey;
      const response = await axios.post(
        "https://www.backend.fartakproject.ir/api/TeacherTypes/GetById",
        { id },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    enabled: !!id,
    retry: 3,
  });

  return {
    data,
    isLoading,
    refetch,
    listTeacherTypeDataById,
    listTeacherTypeLoadingById,
  };
};
