import axios from "axios";
import { LoginUser, RegisterUser } from "@/shared/interfaces/AuthInterface";
import { useDataUser } from "@/shared/store/DataUser";
import { useNavigate } from "react-router-dom";

export const useAuthenticationApi = () => {
  const { setDataUser } = useDataUser();
  const navigate = useNavigate();
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
  const add = async (data: RegisterUser) => {
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
        localStorage.setItem("token", response.data.token.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Login = async (data: LoginUser) => {
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
        navigate("/", { replace: true });
        localStorage.setItem("token", response.data.token.token);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { add, getDataUser, Login };
};
