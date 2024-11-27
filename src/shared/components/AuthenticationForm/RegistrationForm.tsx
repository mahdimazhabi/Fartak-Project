import { schemaRegistration } from "@/shared/schema/schemaRegistration";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as yup from "yup";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const RegistrationForm = () => {
  type IFormInput = yup.InferType<typeof schemaRegistration>;
  const [waiting, setWaiting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schemaRegistration),
  });

  const onsubmit: SubmitHandler<IFormInput> = async () => {
    try {
      setWaiting(true);
    } catch (error: any) {
      console.log("fetch data", error);
      reset();
    } finally {
      setWaiting(false);
      reset();
    }
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="flex flex-col gap-3 ">
        <div className="lg:flex justify-center">
          <Input
            label="نام و نام خانوادگی"
            placeholder="مهتاب هادیان"
            rounded={"md"}
            {...register("lastNamefristname")}
            error={errors.lastNamefristname}
            className="border-none w-full sm:w-[500px] md:w-[600px] bg-[#EFF0F2]" // رسپانسیو برای اندازه‌های مختلف
          />
        </div>
        <div className="lg:flex justify-center">
          <Input
            label="ایمیل"
            placeholder="ایمیل خود را وارد کنید"
            {...register("email")}
            error={errors.email}
            className="border-none w-full sm:w-[500px] md:w-[600px] bg-[#EFF0F2]"
            rounded={"md"}
          />
        </div>
        <div className="lg:flex justify-center">
          <Input
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد کنید"
            {...register("password")}
            error={errors.password}
            className="border-none w-full sm:w-[500px] md:w-[600px] bg-[#EFF0F2]"
            rounded={"md"}
          />
        </div>
        <div className="lg:flex md:flex justify-center mt-5">
          <Button
            type="submit"
            loading={waiting}
            className="bg-[#5171FC] rounded-full w-full sm:w-[300px] lg:h-[60px] h-[45px] text-2xl font-bold"
          >
            عضویت
          </Button>
        </div>
        <div className="flex justify-center ">
          <Link to={"/Login"}>
            <span className="font-bold">
              استاد یا کارفرما هستید؟
              <span className="text-[#5171FC]">عضویت استاد و کارفرما</span>
            </span>
          </Link>
        </div>
        <div className="flex justify-center gap-5 mt-5 flex-wrap">
          <div className="flex items-center border border-[#D2D2D2] p-2 rounded cursor-pointer hover:bg-white transition-colors duration-500 hover:text-black font-bold">
            <span>Sing up with GitHub</span>
            <FaGithub className="relative bottom-0.5 mr-2 w-[50px] h-[50px]" />
          </div>
          <div className="flex items-center border border-[#D2D2D2] p-2 rounded cursor-pointer hover:bg-white transition-colors duration-500 hover:text-black font-bold">
            <span>Sing up with Google</span>
            <FcGoogle className="relative bottom-0.5 mr-2 w-[50px] h-[50px]" />
          </div>
        </div>
      </div>
    </form>
  );
};