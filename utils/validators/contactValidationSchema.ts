import * as Yup from "yup";

const contactValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("get me your email! "),
  name: Yup.string()
    .min(5, "tell me who you are !")
    .max(100, "max 100 characters ")
    .required("name is required"),
  topic: Yup.string()
    .min(5, "Too Short!, at last 5 characters")
    .max(100, "max 100 characters ")
    .required("topic is required"),
  content: Yup.string()
    .min(5, "i do not undestand, explain me it better!")
    .max(1800, "sorry beauty i'm too busy you can said  it simpler for sure!")
    .required("contect is required"),
});
export default contactValidationSchema;
