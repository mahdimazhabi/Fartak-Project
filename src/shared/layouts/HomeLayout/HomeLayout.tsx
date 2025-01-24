import { Outlet } from "react-router-dom";
import { useAuthentication } from "@/api/Authentication/Authentication";
import { useDataUser } from "@/shared/store/DataUser";
import { useEffect } from "react";

const HomeLayout = () => {
  const { getDataUser } = useAuthentication();
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
