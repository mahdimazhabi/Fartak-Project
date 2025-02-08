import ProjectRegistrationForm from "../form/ProjectRegistrationForm";
import { Toaster } from "@/components/ui/sonner";
const ProjectRegistration = () => {
  return (
    <section className="p-3">
      <div className="flex justify-center p-5 bg-yellow-600 lg:w-1/2 mx-auto rounded-lg mt-32">
        <h1 className="text-white font-black lg:text-xl ">
          استخدام فریلنسر و سفارش پروژه
        </h1>
      </div>
      <div className="my-20">
        <div className="bg-slate-200 lg:w-1/2 mx-auto rounded-2xl py-20">
          <ProjectRegistrationForm />
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default ProjectRegistration;
