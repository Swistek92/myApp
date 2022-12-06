import * as Yup from "yup";

const changePasswordValidationSchema = Yup.object({
  currentPassword: Yup.string()
    .min(5, "min 5 symbols")
    .max(40, "max 40 symbols")
    .required("current password!"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "min 5 symbols")
    .max(40, "max 40 symbols"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
export default changePasswordValidationSchema;
