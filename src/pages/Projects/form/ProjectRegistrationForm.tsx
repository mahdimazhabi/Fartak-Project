import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as yup from "yup";
import ProjectRegistrationSchema from "@/shared/schema/ProjectRegistrationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import useProjectApi from "@/api/Project/ProjectApi";
import { addProjects } from "@/shared/interfaces/ProjectInterface";

const ProjectRegistrationForm = () => {
  const [waiting, setWaiting] = useState(false);
  const { add } = useProjectApi();
  type IFormInput = yup.InferType<typeof ProjectRegistrationSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProjectRegistrationSchema),
  });

  const onsubmit: SubmitHandler<IFormInput> = async (data: addProjects) => {
    try {
      setWaiting(true);

      const durationInMinutes = parseInt(data.duration || "0") * 1440;

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
      formData.set("duration", String(durationInMinutes));

      await add(formData);
    } catch {
      toast.error("خطا در ارسال داده‌ها");
    } finally {
      setWaiting(false);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="flex flex-col gap-8 px-4 sm:px-8 lg:px-16 ">
        <div className="mx-auto w-full sm:w-[500px] md:w-[600px]">
          <label htmlFor="Title" className=" text-black font-bold  ">
            عنوان پروژه
          </label>
          <Input
            id="Title"
            placeholder="عنوان پروژه خود را وارد کنید"
            {...register("title")}
            error={errors.title}
            className="border-none w-full sm:w-[500px] md:w-[600px] mt-3 bg-[#EFF0F2] placeholder:text-sm"
            rounded={"md"}
            type="text"
          />
        </div>

        <div className="mx-auto w-full sm:w-[500px] md:w-[600px]">
          <label htmlFor="Description" className="text-black font-bold">
            بیشتر درباره پروژه بگویید
          </label>
          <textarea
            id="Description"
            placeholder="کمی بیشتر در مورد پروژه بنویسید "
            {...register("description")}
            className="border-none w-full mt-3 bg-[#EFF0F2] p-3 rounded-md  resize-none  focus:border-none text-black outline-none placeholder:text-sm placeholder:text-gray-600"
            rows={7}
          />
          {errors.description && (
            <span className="text-red-500 text-sm mt-2">
              {errors.description?.message}
            </span>
          )}
        </div>

        <div className="mx-auto w-full sm:w-[500px] md:w-[600px]">
          <label htmlFor="Price" className=" text-black font-bold  ">
            لطفاً بودجه تخمینی خود را وارد کنید.
          </label>
          <Input
            id="Price"
            placeholder="مبلغ مورد نظر خود را وارد کنید"
            {...register("price")}
            error={errors.price}
            className="border-none w-full mt-3 bg-[#EFF0F2] placeholder:text-sm"
            rounded={"md"}
            type="text"
          />
        </div>

        <div className="mx-auto w-full sm:w-[500px] md:w-[600px]">
          <label htmlFor="OwnerId" className=" text-black font-bold  ">
            چقدر زمان برای تحویل پروژه به نظر شما مناسب است؟
          </label>
          <Input
            id="OwnerId"
            placeholder="تعداد روز"
            {...register("duration")}
            error={errors.duration}
            className="border-none w-full mt-3 bg-[#EFF0F2] placeholder:text-sm"
            rounded={"md"}
            type="text"
          />
        </div>

        <div className="flex justify-center mt-5">
          <Button
            type="submit"
            loading={waiting}
            className="bg-[#5171FC] rounded-full w-2/3 text-lg py-6 font-bold"
          >
            ثبت پروژه
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ProjectRegistrationForm;
