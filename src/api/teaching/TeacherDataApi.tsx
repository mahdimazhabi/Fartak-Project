import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useTeacherDataByIdStore } from "@/shared/store/TeacherDataByIdStore";

export const useTeacherDataApi = () => {
  const { id } = useTeacherDataByIdStore();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["TeacherDataAll"],
    queryFn: async () => {
      const response = await axios.post(
        "https://www.backend.fartakproject.ir/api/TeacherUsers/GetAll",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.teachers;
    },
  });

  const { data: listTeacherDataById, isLoading: listTeacherLoadingById } =
    useQuery({
      queryKey: ["TeacherDataById", id],

      queryFn: async ({ queryKey }) => {
        const [, id] = queryKey;
        const response = await axios.post(
          "https://www.backend.fartakproject.ir/api/TeacherUsers/GetById",
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
    listTeacherDataById,
    listTeacherLoadingById,
  };
};
