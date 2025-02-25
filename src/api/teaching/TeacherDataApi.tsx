import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useTeacherDataByIdStore } from "@/shared/store/TeacherDataByIdStore";
import { getDataTeacher } from "@/shared/interfaces/TeacherIInterface";
import { useParams } from "react-router-dom";
export const useTeacherDataApi = () => {
  const { id } = useTeacherDataByIdStore();
  const { id: userIdTeacher } = useParams();
  const { data, isLoading, refetch } = useQuery<getDataTeacher[]>({
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
      return response.data.teacherUsers;
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

  const { data: DataTeacherById, isLoading: DataTeacherByIdLoading } = useQuery<
    getDataTeacher[]
  >({
    queryKey: ["getdatateacherbyid", id],
    queryFn: async () => {
      const response = await axios.post(
        "https://www.backend.fartakproject.ir/api/TeacherUsers/GetByTeacherId",
        { teacherId: userIdTeacher },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response) {
        return response.data.teacherUsers;
      }
    },
    enabled: !!userIdTeacher,
    retry: 3,
  });

  return {
    data,
    isLoading,
    refetch,
    listTeacherDataById,
    listTeacherLoadingById,
    DataTeacherById,
    DataTeacherByIdLoading,
  };
};
