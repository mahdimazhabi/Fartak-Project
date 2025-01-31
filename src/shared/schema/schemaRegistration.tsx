import * as yup from "yup";

export const schemaRegistration = yup.object().shape({
  name: yup.string().required("نام الزامی است"),
  lastname: yup.string().required("نام خانوادگی الزامی است"),
  email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  salt: yup.string().default(""),
  mobile: yup.string().required("شماره تلفن الزامی است"),
  password: yup
    .string()
    .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
  kind: yup.string().required("انتخاب نقش الزامی است"),
  status: yup.number().default(1),
  verify: yup.string().default(""),
});
