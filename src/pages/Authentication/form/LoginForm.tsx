import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { SchemaLogin } from "@/shared/schema/shcemaLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const LoginForm = () => {
  const [waiting, setWaiting] = useState(false);
  type IFormInput = yup.InferType<typeof SchemaLogin>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(SchemaLogin),
  });

  const onsubmit: SubmitHandler<IFormInput> = async () => {
    try {
      setWaiting(true);
    } catch (error) {
      console.log("fetch data", error);
    } finally {
      setWaiting(false);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="flex flex-col gap-8 px-4 sm:px-8 lg:px-16">
        <div className="mx-auto w-full sm:w-[500px] md:w-[600px]">
          <Input
            label="شماره موبایل"
            placeholder="شماره مویابل  خود را وارد کنید"
            {...register("mobile")}
            error={errors.mobile}
            className="border-none w-full sm:w-[500px] md:w-[600px] bg-[#EFF0F2]"
            rounded={"md"}
          />
        </div>

        <div className="mx-auto w-full sm:w-[500px] md:w-[600px]">
          <Input
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد کنید"
            error={errors.password}
            className="border-none w-full bg-[#EFF0F2]"
            rounded={"md"}
            icon={EyeOff}
            iconPosition="left"
            cursorpointer={true}
          />
        </div>

        <div className="flex justify-center mt-5">
          <Button
            type="submit"
            loading={waiting}
            className="bg-[#5171FC] rounded-full w-[300px] h-[60px] text-2xl font-bold"
          >
            ورود
          </Button>
        </div>

        <div className="flex justify-center mt-4">
          <Link to={"/auth/Registration"}>
            <span className="font-bold  text-sm">
              نقش دیگری دارید؟
              <span className="text-[#5171FC] text-sm">عضویت</span>
            </span>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          <div className="flex items-center border border-[#D2D2D2] p-2 rounded cursor-pointer hover:bg-white transition-colors duration-500 hover:text-black font-bold">
            <span>Sign up with GitHub</span>
            <FaGithub className="relative bottom-0.5 mr-2 w-[40px] h-[40px]" />
          </div>
          <div className="flex items-center border border-[#D2D2D2] p-2 rounded cursor-pointer hover:bg-white transition-colors duration-500 hover:text-black font-bold">
            <span>Sign up with Google</span>
            <FcGoogle className="relative bottom-0.5 mr-2 w-[40px] h-[40px]" />
          </div>
        </div>
      </div>
    </form>
  );
};
