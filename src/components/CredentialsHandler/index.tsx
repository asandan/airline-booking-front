import { Alert, AlertTitle, Typography } from "@mui/material";
import { SignUpForm, LoginForm } from "../Forms";
import { CredentialsFooter } from "../CredentialsFooter";
import { FC, useState } from "react";
import { CredentialsHandlerProps } from "@/util/types";

const credentialsTypes = {
  login: LoginForm,
  signUp: SignUpForm,
};

export const CredentialsHandler: FC<CredentialsHandlerProps> = ({
  credentialsType,
}) => {
  const [isLoginError, setIsLoginError] = useState(false);
  const CredentialsForm = credentialsTypes[credentialsType];
  const header = credentialsType === "login" ? "LOG IN" : "SIGN UP";
  const isLoginPage = credentialsType === "login";

  return (
    <section className="flex items-center justify-center h-[100vh] bg-[#101f3f] text-white">
      <div className="bg-white rounded-3xl p-6 w-[450px] shadow-lg">
        <Typography
          variant="h4"
          gutterBottom
          className="text-3xl font-semibold text-center text-gray-800 mb-3 z-10"
        >
          {header}
        </Typography>
        {isLoginError && (
          <Alert className={"mb-3 w-full"} severity="error">
            <AlertTitle>Error</AlertTitle>
            Invalid credentials
          </Alert>
        )}
        <CredentialsForm setLoginError={setIsLoginError} />
        <CredentialsFooter isLoginPage={isLoginPage} />
      </div>
    </section>
  );
};
