import * as yup from "yup";

const signUpValidationSchema = yup.object().shape({
  email: yup.string().email("Enter valid email").required("Enter your email"),
  name: yup
    .string()
    .min(3, "Minimal length - 3 symbols")
    .required("Enter your name"),
  phoneNumber: yup
    .number()
    .min(11, "Invalid number")
    .max(11, "Invalid number")
    .integer()
    .required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Minimal length - 6 symbols")
    .required("Password is required"),
});

export default signUpValidationSchema;
