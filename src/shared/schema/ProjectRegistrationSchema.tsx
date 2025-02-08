import * as yup from "yup";

const ProjectRegistrationSchema = yup.object().shape({
  title: yup.string().required("عنوان پروژه الزامی است"),
  description: yup
    .string()
    .min(30, "نوضیحات پروژه باید حداقل 30 کاراکتر باشد")
    .required("نوضیحات پروژه الزامی است"),
  price: yup.string().required("مبلغ پروژه الزامی است"),
  duration: yup.string().required("لطفا زمان پروژه مشخص کنید"),
});

export default ProjectRegistrationSchema;
