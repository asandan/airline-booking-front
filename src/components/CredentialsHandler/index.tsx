import { Typography } from "@mui/material";
import { SignUpForm, LoginForm } from "../Forms";
import { CredentialsFooter } from "../CredentialsFooter";
import { FC } from "react";
import { CredentialsHandlerProps } from "@/util/types";

const credentialsTypes = {
  login: LoginForm,
  signUp: SignUpForm,
};

export const CredentialsHandler: FC<CredentialsHandlerProps> = ({
  credentialsType,
}) => {
  const CredentialsForm = credentialsTypes[credentialsType];
  const header = credentialsType === "login" ? "LOG IN" : "SIGN UP";
  const isLoginPage = credentialsType === "login";

  return (
    <main className="flex items-center justify-center overflow-hidden h-[100vh] bg-blue-300 text-white">
      <div className="bg-white rounded-3xl p-6 w-[450px] shadow-lg">
        <Typography
          variant="h4"
          gutterBottom
          className="text-3xl font-semibold text-center text-gray-800 mb-3 z-10"
        >
          {header}
        </Typography>
        <CredentialsForm />
        <CredentialsFooter isLoginPage={isLoginPage} />
      </div>
    </main>
  );
};
