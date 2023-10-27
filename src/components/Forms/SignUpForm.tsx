import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { signUpValidationSchema } from "./validation";
import { DEFAULT_SIGNUP_VALUES } from "@/util";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";

export const SignUpForm = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const EndAdornment = (
    <InputAdornment position="end">
      <IconButton onClick={togglePasswordVisibility}>
        {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </IconButton>
    </InputAdornment>
  );




  const { push } = useRouter();
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
    initialValues: DEFAULT_SIGNUP_VALUES,
    enableReinitialize: true,
    isInitialValid: false,
    onSubmit: async (values, { resetForm }) => {
      push("/login");
    },
    validationSchema: signUpValidationSchema,
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
        label="Name"
        type="name"
        variant="outlined"
        margin="normal"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && !!errors.name}
        FormHelperTextProps={{ children: null }}
        helperText={touched.name ? errors.name : ""}
        fullWidth
      />
      <TextField
        label="Phone number"
        type="phoneNumber"
        variant="outlined"
        margin="normal"
        name="phoneNumber"
        value={values.phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.phoneNumber && !!errors.phoneNumber}
        FormHelperTextProps={{ children: null }}
        helperText={touched.phoneNumber ? errors.phoneNumber : ""}
        fullWidth
      />
      <TextField
        label="Password"
        type={passwordVisible ? "text" : "password"}
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
          endAdornment: EndAdornment,
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
          Sign up
        </Button>
      </div>
    </form>
  );
};
