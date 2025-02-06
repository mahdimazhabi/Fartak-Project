import * as yup from "yup";

const ProjectRegistrationSchema = yup.object().shape({
  Title: yup.string().required("عنوان پروژه الزامی است"),
  Description: yup
    .string()
    .required("وضیحات پروژه باید حداقل 30 کاراکتر باشد."),
  Price: yup.string().required("مبلغ پروژه الزامی است"),
  OwnerId: yup.string().required("لطفا زمان پروژه مشخص کنید"),
});

export default ProjectRegistrationSchema;
