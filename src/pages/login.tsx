import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { IconButton } from "@mui/material";
import Link from "next/link";

import bgImg from "@/pages/bgimage2.jpg";

export default function LoginPage() {
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
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length === 0) {
      // You can make your login request here if there are no errors.
      console.log("Login Form Data:", formData);
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
          LOGIN
        </Typography>
        <form className="space-y-4 z-10">
          <div>
            <TextField
              label="Email"
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
          </div>
          <div className="flex flex-col space-y-2">
            <Button
              variant="outlined"
              color="primary"
              className="py-3"
              onClick={handleLogin}
            >
              Login
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
            <Link href="/forgot-password">
              <h5 className="text-gray-600 text-sm">Forgot Password?</h5>
            </Link>
          </div>
          <div className="text-center">
            <span className="text-gray-600 text-sm">
              Don't have an account?{" "}
            </span>
            <Link href="/sign-up">
              <h5 className="text-blue-500 text-sm">Sign Up</h5>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
