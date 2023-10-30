import { DEFAULT_LOGIN_VALUES, login } from "@/util";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { loginValidationSchema } from "./validation";

import { AuthFormProps } from "@/util/types";
import EndAdornment from "../EndAdornment";

export const LoginForm: FC<AuthFormProps> = ({ setLoginError }) => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const {
    values,
    isValid,
    errors,
    handleBlur,
    handleChange,
    touched,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: DEFAULT_LOGIN_VALUES,
    enableReinitialize: true,
    isInitialValid: false,
    onSubmit: async (values, { resetForm }) => {
      const hasLoggedIn = await login(values);
      if (hasLoggedIn) {
        router.push("/");
      } else {
        setLoginError(true);
        resetForm();
      }
    },
    validationSchema: loginValidationSchema,
  });

  return (
    <form className="space-y-4 z-10" onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && !!errors.email}
        FormHelperTextProps={{ children: null }}
        helperText={touched.email ? errors.email : ""}
        fullWidth
      />

      <TextField
        label="Password"
        type={isPasswordVisible ? "text" : "password"}
        variant="outlined"
        margin="normal"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && !!errors.password}
        FormHelperTextProps={{ children: null }}
        helperText={touched.password ? errors.password : ""}
        fullWidth
        InputProps={{
          endAdornment: (
            <EndAdornment
              passwordVisible={isPasswordVisible}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          ),
        }}
      />

      <div className="flex flex-col space-y-2">
        <Button
          disabled={!isValid || isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          className="py-3 text-white font-semibold"
        >
          Log in
        </Button>
      </div>
    </form>
  );
};
