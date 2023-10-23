import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "next/image"; // Import the Image component
import bgImg from "@/pages/bgimage.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { IconButton } from "@mui/material";

export default function LoginPage() {
  const iconButtonStyle = {
    backgroundColor: '#1877f2', // Facebook color
    color: 'white',
    width: '35px',  // Adjust the width and height for smaller circles
    height: '35px',
    borderRadius: '25%',  // Make the circles smaller
    margin: '0 8px',  // Add some space between the buttons
  };
  return (
    <main className="relative bg-blue-300 h-screen text-white flex items-center justify-center">
      <Image src={bgImg} alt="Background Image" layout="fill" quality={100} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded-3xl p-6 max-w-2xl w-2/3 shadow-lg">
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
              label="Mail"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Button variant="outlined" color="primary" className="py-3">
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
          backgroundColor: '#1da1f2', // Twitter color
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
          backgroundColor: '#4285F4', // Google color
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
              Don't have an account?{" "}
            </span>
            <a href="/sign-up" className="text-blue-500 text-sm">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
