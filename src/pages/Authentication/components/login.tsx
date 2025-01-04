import { LoginForm } from "@/pages/Authentication/form/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-5">
      <h1 className="text-center text-[#1D40D7] mb-20 dark:text-white text-5xl font-black">
        خوش آمدید!
      </h1>
      <LoginForm />
    </div>
  );
};

export default Login;
