import ProjectRegistrationForm from "../form/ProjectRegistrationForm";

const ProjectRegistration = () => {
  return (
    <section>
      <div className="flex justify-center p-5 bg-yellow-600 w-1/2 mx-auto rounded-lg mt-32">
        <h1 className="text-white font-black text-xl">
          استخدام فریلنسر و سفارش پروژه با زمانبندی فوری
        </h1>
      </div>
      <div className="my-20">
        <div className="bg-slate-200 w-1/2 mx-auto rounded-2xl py-20">
          <ProjectRegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default ProjectRegistration;
