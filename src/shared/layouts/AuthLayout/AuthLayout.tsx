import { Outlet } from "react-router-dom";
import Img from "@/assets/Img/Rectangle 57.png";
import { Toaster } from "@/components/ui/sonner";

const AuthLayout = () => {
  return (
    <main>
      <div className="flex items-center  min-h-screen overflow-hidden  lg:px-3">
        <div className="hidden lg:flex">
          <img
            src={Img}
            alt="Login Illustration"
            className="w-[40vw] h-full object-cover"
          />
        </div>
        <Toaster/>
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
