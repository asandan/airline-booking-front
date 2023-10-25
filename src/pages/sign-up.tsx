import Typography from "@mui/material/Typography";
import Link from "next/link";
import { SignUpForm } from "@/components/Forms";
import { CredentialsFooter } from "@/components/CredentialsFooter";

export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center overflow-hidden h-[100vh] bg-blue-300 text-white">
      <div className="bg-white rounded-3xl p-6 w-[450px] shadow-lg">
        <Typography
          variant="h4"
          gutterBottom
          className="text-3xl font-semibold text-center text-gray-800 mb-3 z-10"
        >
          SIGN UP
        </Typography>
        <SignUpForm />
        <CredentialsFooter isLoginPage={false}/>
      </div>
    </main>
  );
}
