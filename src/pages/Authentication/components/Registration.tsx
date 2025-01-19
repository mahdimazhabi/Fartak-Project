import { RegistrationForm } from "@/pages/Authentication/form/RegistrationForm";

const Registration = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-5">
      <h1 className="text-center text-[#1D40D7] my-10 dark:text-white text-5xl font-black">
        خوش آمدید!
      </h1>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
