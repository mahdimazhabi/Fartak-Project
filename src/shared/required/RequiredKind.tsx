import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import useDataUserById from "../action/GetDataUser";

const RequiredKind = ({ children }: PropsWithChildren) => {
  const { data } = useDataUserById();
  const kind = data?.users[0]?.kind;
  if (kind != 3) {
    return <Navigate to={"/"} replace />;
  }
  return <>{children}</>;
};

export default RequiredKind;
