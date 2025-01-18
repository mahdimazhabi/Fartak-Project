import axios from "axios";

export const useAuthentication = () => {
  const add = async (data: any) => {
    try {
      const response = await axios.post(
        "https://www.backendtestali.ir/api/Users/Add",
        data
      );
      if (response) {
        console.log("User Added Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { add };
};
