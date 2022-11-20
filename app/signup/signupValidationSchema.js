import * as Yup from "yup";

const signupValidationSchema = Yup.object({
  name: Yup.string()
    .min(5, "Too Short!, at last 5 characters")
    .max(50, "Too Long!, max 50 characters")
    .required("first name is required"),
  password: Yup.string()
    .min(5, "Too Short!, at last 5 characters")
    .max(50, "Too Long!, max 50 characters")
    .required("password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("passwordConfirm is required"),
  email: Yup.string().email("Invalid email").required("email is required"),
});
export default signupValidationSchema;
