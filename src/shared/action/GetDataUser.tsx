import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useDataUserById = () => {
  const userId = localStorage.getItem("userId");

  const { data, isLoading, error } = useQuery({
    queryKey: ["datauser", userId],
    queryFn: async () => {
      const response = await axios.post(
        `https://backend.fartakproject.ir/api/Users/GetById`,
        { userId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    enabled: !!userId,
  });

  return { data, isLoading, error };
};

export default useDataUserById;
