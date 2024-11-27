import Img from "@/assets/Img/Rectangle 57.png";
import { RegistrationForm } from "@/shared/components/AuthenticationForm/RegistrationForm";

const Registration = () => {
  return (
    <div className="flex px-9 pt-8 ">
      <div className="lg:flex hidden">
        <img src={Img} alt="Login Illustration " className="w-[77%] h-full" />
      </div>
      <div className="flex flex-col  lg:flex-1 ">
        <h1 className=" text-center  text-[#1D40D7] mb-20 dark:text-white text-5xl font-black">
          خوش آمدید!
        </h1>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
