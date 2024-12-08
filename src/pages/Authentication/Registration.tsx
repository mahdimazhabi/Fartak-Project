import Img from "@/assets/Img/Rectangle 57.png";
import { RegistrationForm } from "@/pages/Authentication/components/form/RegistrationForm";

const Registration = () => {
  return (
    <div className="flex py-2 px-9">
      <div className="hidden lg:flex">
        <img
          src={Img}
          alt="Login Illustration"
          className="w-[40vw] h-[97.5vh] object-cover  rounded-lg "
        />
      </div>

      <div className="flex flex-col lg:flex-1 ">
        <h1 className=" text-center  text-[#1D40D7] mb-10 mt-10 dark:text-white text-5xl font-black">
          خوش آمدید!
        </h1>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
