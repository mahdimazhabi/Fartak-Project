import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useProjectApi = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["listProjects"],
    queryFn: async function () {
      const response = await axios.post(
        "https://www.backendtestali.ir/api/Projects/GetAll",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    staleTime: 500,
    retry: 3,
  });

  return { data, isLoading, error };
};

export default useProjectApi;
