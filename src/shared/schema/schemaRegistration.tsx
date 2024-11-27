import * as yup from "yup";

export const schemaRegistration = yup.object().shape({
  lastNamefristname: yup.string().required("نام و نام خانوداگی الزامی است"),
  email: yup
    .string()
    .email("ایمیل وارد شده معتبر نیست")
    .required("ایمیل الزامی است"),
  password: yup
    .string()
    .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});
