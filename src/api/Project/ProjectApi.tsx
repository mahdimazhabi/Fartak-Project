import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const useProjectApi = () => {
  const navigate = useNavigate();
  const {
    data: listProjectsData,
    isLoading: listProjectsLoading,
    error: listProjectsError,
  } = useQuery({
    queryKey: ["listProjects"],
    queryFn: async function () {
      const response = await axios.post(
        "https://backend.fartakproject.ir/api/Projects/GetAll",
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

  const add = async (data: any) => {
    try {
      const response = await axios.post(
        "https://backend.fartakproject.ir/api/Projects/Add",
        data
      );
      if (response) {
        toast.success("پروژه با موفقیت اضافه شد");
        setTimeout(() => {
          navigate("/projects", { replace: true });
        }, 3000);
      }
      return true;
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  return {
    listProjectsData,
    listProjectsLoading,
    listProjectsError,
    add,
  };
};

export default useProjectApi;
