import { Outlet } from "react-router-dom";
import { useAuthenticationApi } from "@/api/Authentication/AuthenticationApi";
import { useDataUser } from "@/shared/store/DataUser";
import { useEffect } from "react";

const HomeLayout = () => {
  const { getDataUser } = useAuthenticationApi();
  const { dataUser } = useDataUser();
  console.log(dataUser);

  useEffect(() => {
    getDataUser();
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default HomeLayout;
