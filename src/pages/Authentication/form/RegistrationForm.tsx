import { schemaRegistration } from "@/shared/schema/schemaRegistration";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EyeOff } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Label } from "@/components/ui/label";
import { SelectGroup } from "@radix-ui/react-select";
import { useAuthentication } from "@/api/Authentication/Authentication";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const RegistrationForm = () => {
  type IFormInput = yup.InferType<typeof schemaRegistration>;
  const [waiting, setWaiting] = useState(false);
  const { add } = useAuthentication();

  const dataSelect = [
    { id: 1, descreption: "فریلنسر" },
    { id: 2, descreption: "دانشجو" },
    { id: 3, descreption: "کارفرما" },
  ];
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schemaRegistration),
  });

  const onsubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);

    try {
      setWaiting(true);
      add(data);
    } catch (error) {
      console.log("fetch data", error);
      reset();
    } finally {
      setWaiting(false);
      reset();
    }
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="flex flex-col gap-8 ">
        <div className="justify-center lg:flex">
          <Input
            label="نام  "
            placeholder="مهتاب "
            rounded={"md"}
            {...register("name")}
            error={errors.name}
            className="border-none w-full sm:w-[500px] md:w-[600px] bg-[#EFF0F2]" // رسپانسیو برای اندازه‌های مختلف
          />
        </div>
        <div className="justify-center lg:flex">
          <Input
            label="نام خانوادگی"
            placeholder="محمدی"
            {...register("lastname")}
            error={errors.lastname}
            className="border-none w-full sm:w-[500px] md:w-[600px] bg-[#EFF0F2]"
            rounded={"md"}
          />
        </div>
        <div className="justify-center lg:flex">
          <Input
            label="شماره موبایل"
            placeholder="شماره مویابل  خود را وارد کنید"
            {...register("mobile")}
            error={errors.mobile}
            className="border-none w-full sm:w-[500px] md:w-[600px] bg-[#EFF0F2]"
            rounded={"md"}
          />
        </div>
        <div className="justify-center lg:flex">
          <Input
            label="ایمیل"
            placeholder="ایمیل خود را وارد کنید"
            {...register("email")}
            error={errors.email}
            className="border-none w-full sm:w-[500px] md:w-[600px] bg-[#EFF0F2]"
            rounded={"md"}
          />
        </div>

        <div className="justify-center lg:flex">
          <Input
            icon={EyeOff}
            iconPosition="left"
            cursorpointer={true}
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد کنید"
            {...register("password")}
            error={errors.password}
            className="border-none w-full sm:w-[500px] md:w-[600px] bg-[#EFF0F2]"
            rounded={"md"}
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <Label className="mb-2 block text-black font-bold dark:text-white">
            نقش شما
          </Label>
          <Select
            {...register("kind")}
            onValueChange={(value) => setValue("kind", value)}
          >
            <SelectTrigger className="bg-[#EFF0F2]">
              <SelectValue placeholder="انتخاب کنید" />
            </SelectTrigger>
            <SelectContent className="bg-[#EFF0F2]">
              <SelectGroup>
                {dataSelect.map((item) => (
                  <SelectItem
                    value={item.id.toString()}
                    key={item.id}
                    className="mb-1 py-0.5"
                  >
                    <span>{item.descreption}</span>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.kind && (
            <p className="text-red-600 mt-2 text-sm">{errors.kind.message}</p>
          )}
        </div>

        <div className="flex justify-center mt-5">
          <Button
            type="submit"
            loading={waiting}
            className="bg-[#5171FC] rounded-full w-[300px] h-[60px] text-2xl font-bold"
          >
            عضویت{" "}
          </Button>
        </div>
        <div className="flex justify-center ">
          <Link to={"/auth/Login"}>
            <span className="font-bold text-sm">
              کارفرما هستید؟
              <span className="text-[#5171FC] text-sm">عضویت کارفرما</span>
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
