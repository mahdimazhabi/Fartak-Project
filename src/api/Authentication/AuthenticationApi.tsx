import axios from "axios";
import { LoginUser, RegisterUser } from "@/shared/interfaces/AuthInterface";
import { useDataUser } from "@/shared/store/AllDataUserStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
        setDataUser(response.data);
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
      console.log(response);

      if (response.data.isSuccess) {
        localStorage.setItem("token", response.data.token.token);
        localStorage.setItem("userId", response.data.user.userId);
        toast.success("ثبت نام با موفقیت انجام شد");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error("خطا در ثبت نام");
      toast.error(error.data.message);
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

      if (response.data.isSuccess) {
        toast.success("خوش آمدید");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);
        localStorage.setItem("token", response.data.token.token);
        localStorage.setItem("userId", response.data.user.userId);
      } else toast.error(response.data.message);
    } catch (error: any) {
      toast.error("خطا در ثبت نام");
      toast.error(error.data.message);
    }
  };
  return { add, getDataUser, Login };
};
