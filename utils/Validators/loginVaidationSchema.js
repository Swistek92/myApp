import * as Yup from "yup";

const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("get me your email! "),
  password: Yup.string()
    .min(5, "min 5 character password")
    .required("password is required"),
});
export default loginValidationSchema;
