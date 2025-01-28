import axios from "axios";
import { useUniqueUserDataStore } from "../store/UniqueUserDataStore";

const useDataUserById = () => {
  const userId = localStorage.getItem("userId");
  const { setDataUser } = useUniqueUserDataStore();

  const getuserbyId = async () => {
    try {
      const response = await axios.post(
        `https://www.backendtestali.ir/api/Users/GetById`,
        { userId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (
        response.status === 200 &&
        response.data.users &&
        response.data.users.length > 0
      ) {
        setDataUser(response.data.users[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { getuserbyId };
};

export default useDataUserById;
