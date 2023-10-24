import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { IconButton } from "@mui/material";

import bgImg from "@/pages/bgimage2.jpg";

export default function SignUpPage() {
  const iconButtonStyle = {
    backgroundColor: "#1877f2", // Facebook color
    color: "white",
    width: "35px",
    height: "35px",
    borderRadius: "25%",
    margin: "0 8px",
  };

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length === 0) {
      // Submit the form if there are no errors
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
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
        <form className="space-y-4 z-10" onSubmit={handleSubmit}>
          <div>
            <TextField
              label="Mail"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </div>
          <div>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              name="username"
              value={formData.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
            />
          </div>
          <div>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
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
            <span className="text-gray-600 text-sm">
              Already have an account?{" "}
            </span>
            <a href="/login" className="text-blue-500 text-sm">
              Log In
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
