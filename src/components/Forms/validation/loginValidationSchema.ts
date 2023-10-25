import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Please use at least 6 characters for your password")
    .required("Password is required"),
});

export default loginValidationSchema;
