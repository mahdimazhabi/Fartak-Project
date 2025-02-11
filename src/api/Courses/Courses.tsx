import axios from "axios";
import { useQuery } from "@tanstack/react-query";
export const useCoursesApi = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getAllCourses"],
    queryFn: async () => {
      const response = await axios.post(
        "https://www.backendtestali.ir/api/Courses/GetAll",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    staleTime: 5000,
    retry: 3,
  });

  return { data, isLoading };
};
