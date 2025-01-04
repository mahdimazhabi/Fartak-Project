import { Outlet } from "react-router-dom";
import Img from "@/assets/Img/Rectangle 57.png";


const AuthLayout = () => {
  return (
    <main>
      <div className="flex min-h-screen py-2 overflow-hidden lg:px-9">
        {/* بخش تصویر */}
        <div className="hidden lg:flex">
          <img
            src={Img}
            alt="Login Illustration"
            className="w-[40vw] h-[97.5vh] object-cover  rounded-lg "
          />
        </div>

        {/* بخش فرم ورود */}
        <Outlet />
      
      </div>
    </main>
  );
};

export default AuthLayout;
