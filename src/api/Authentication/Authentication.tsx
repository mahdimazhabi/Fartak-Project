import axios from "axios";
import { DataUser } from "@/shared/interfaces/AuthInterface";
import { useDataUser } from "@/shared/store/DataUser";

export const useAuthentication = () => {
  const { setDataUser } = useDataUser();
  const getDataUser = async () => {
    try {
      const response = await axios.post(
        "https://www.backendtestali.ir/api/Users/GetAll",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response) {
        console.log(response.data);
        setDataUser(response.data);
        console.log("User Data Fetched Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const add = async (data: DataUser) => {
    try {
      const response = await axios.post(
        "https://www.backendtestali.ir/api/Users/Add",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response) {
        console.log("User Added Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Login = async (data: DataUser) => {
    try {
      const response = await axios.post(
        "https://www.backendtestali.ir/api/Users/GetByMobilePassword",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      if (response) {
        console.log("User Logged in Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { add, getDataUser, Login };
};
