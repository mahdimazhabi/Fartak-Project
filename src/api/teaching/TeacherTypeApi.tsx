import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useTeacherTypeIdStore } from "@/shared/store/TeacherTypeIdStore";
import { getDataTeachertype } from "@/shared/interfaces/TeacherIInterface";
import { getDataParentTeacherType } from "@/shared/interfaces/TeacherIInterface";
import { useTypeIdStore } from "@/shared/store/TypeIdStore";
export const useTeacherTypeApi = () => {
  const { id } = useTeacherTypeIdStore();
  const { id: TypeId } = useTypeIdStore();

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

  const { data: DataParentType, isLoading: LoadingParentType } = useQuery<
    getDataParentTeacherType[]
  >({
    queryKey: ["DataParentType"],
    queryFn: async () => {
      const response = await axios.post(
        "https://www.backend.fartakproject.ir/api/TeacherTypes/GetAllParent",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.teacherTypes;
    },
    retry: 3,
  });

  const { data: DataChildrenById, isLoading: isLoadingChildrenById } = useQuery(
    {
      queryKey: ["getDataChildrenById", TypeId],
      queryFn: async () => {
        try {
          const response = await axios.post(
            "https://www.backend.fartakproject.ir/api/TeacherTypes/GetChildrenById",
            {
              teacherTypeId: TypeId,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response) {
            return response.data.teacherTypes;
          }
        } catch {
          console.error("error");
        }
      },
    }
  );

  return {
    data,
    isLoading,
    refetch,
    listTeacherTypeDataById,
    listTeacherTypeLoadingById,
    DataParentType,
    LoadingParentType,
    DataChildrenById,
    isLoadingChildrenById,
  };
};
