import { LoginForm } from "@/pages/Authentication/components/form/LoginForm";
import Img from "@/assets/Img/Rectangle 57.png";

const Login = () => {
  return (
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
      <div className="flex flex-col items-center justify-center flex-1 p-5">
        <h1 className="text-center text-[#1D40D7] mb-20 dark:text-white text-5xl font-black">
          خوش آمدید!
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
