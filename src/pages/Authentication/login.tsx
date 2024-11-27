import { LoginForm } from "@/shared/components/AuthenticationForm/LoginForm";
import Img from "@/assets/Img/Rectangle 57.png";

const Login = () => {
  return (
    <div className="flex lg:px-9 pt-8 ">
      <div className="lg:flex hidden ">
        <img src={Img} alt="Login Illustration " className="w-[77%] h-[100%]" />
      </div>
      <div className="flex flex-col justify-start flex-1 p-5">
        <h1 className=" text-center  text-[#1D40D7] mb-20 dark:text-white text-5xl font-black">
          خوش آمدید!
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
