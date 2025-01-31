import axios from "axios";
import { toast } from "sonner";
import { useDataProjectStore } from "@/shared/store/AllDataProjectsStore";

const useProjectApi = () => {
  const { setDataProjects } = useDataProjectStore();
  const getList = async () => {
    try {
      const response = await axios.post(
        "https://www.backendtestali.ir/api/Projects/GetAll",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response) {
        console.log(response);
        setDataProjects(response.data.projects);
      }
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };
  return { getList };
};

export default useProjectApi;
