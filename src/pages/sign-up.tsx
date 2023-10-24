import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { IconButton } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import bgImg from "@/pages/bgimage2.jpg";

interface FormData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/,
      "Invalid email format"
    )
    .required("Email is required"),
  username: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Username must consist of only characters")
    .required("Username is required"),
  password: Yup.string()
    .max(6, "Password must not exceed 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords do not match")
    .required("Confirm Password is required"),
});

export default function SignUpPage() {
  const iconButtonStyle = {
    backgroundColor: "#1877f2", // Facebook color
    color: "white",
    width: "35px",
    height: "35px",
    borderRadius: "25%",
    margin: "0 8px",
  };

  const handleSubmit = (values: FormData) => {
    // Submit the form if there are no errors
    console.log("Form submitted:", values);
  };

  return (
    <main className="relative bg-blue-300 h-screen text-white flex items-center justify-center">
      <Image src={bgImg} alt="Background Image" layout="fill" quality={100} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-20 rounded-3xl p-6 max-w-2xl w-2/3 shadow-lg">
        <Typography
          variant="h4"
          gutterBottom
          className="text-3xl font-semibold text-center text-gray-800 mb-6 z-10"
        >
          SIGN UP
        </Typography>
        <Formik
          initialValues={{
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4 z-10">
            <div>
              <Field
                as={TextField}
                label="Mail"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div>
              <Field
                as={TextField}
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                name="username"
              />
              <ErrorMessage name="username" component="div" className="text-red-500" />
            </div>
            <div>
              <Field
                as={TextField}
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                name="password"
              />
              <Field
                as={TextField}
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                name="confirmPassword"
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Button variant="outlined" color="primary" className="py-3" type="submit">
                Sign Up
              </Button>
              <div className="flex justify-center space-x-4">
                <IconButton
                  style={iconButtonStyle}
                  href="https://www.facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  style={{
                    ...iconButtonStyle,
                    backgroundColor: "#1da1f2",
                  }}
                  href="https://twitter.com"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  style={{
                    ...iconButtonStyle,
                    backgroundColor: "#4285F4",
                  }}
                  href="https://www.google.com"
                  target="_blank"
                  aria-label="Google"
                >
                  <GoogleIcon />
                </IconButton>
              </div>
            </div>
            <div className="text-center">
              <a href="/forgot-password" className="text-gray-600 text-sm">
                Forgot Password?
              </a>
            </div>
            <div className="text-center">
              <span className="text-gray-600 text-sm">Already have an account? </span>
              <a href="/login" className="text-blue-500 text-sm">
                Log In
              </a>
            </div>
          </Form>
        </Formik>
      </div>
    </main>
  );
}
