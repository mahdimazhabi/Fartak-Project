import axios from "axios";
// import { useDataProjectStore } from "@/shared/store/AllDataProjectsStore";
import { useQuery } from "@tanstack/react-query";

const useProjectApi = () => {
  // const { setDataProjects } = useDataProjectStore();

  const { data, isPending } = useQuery({
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
  });

  return { data, isPending };
};

export default useProjectApi;
