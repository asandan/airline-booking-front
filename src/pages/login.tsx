import { CredentialsFooter } from "@/components/CredentialsFooter";
import { LoginForm } from "@/components/Forms";
import { Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <main className="relative bg-blue-300 h-screen text-white flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl p-6 w-[450px] shadow-lg">
        <Typography
          variant="h4"
          gutterBottom
          className="text-3xl font-semibold text-center text-gray-800 mb-6 z-10"
        >
          LOG IN
        </Typography>
        <LoginForm />
        <CredentialsFooter isLoginPage />
      </div>
    </main>
  );
}
