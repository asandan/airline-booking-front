import { Dispatch, SetStateAction } from "react";

export type CredentialsFooterProps = {
  isLoginPage: boolean;
};

export type CredentialsHandlerProps = {
  credentialsType: "login" | "signUp";
};

export type AuthFormProps = {
  setLoginError: Dispatch<SetStateAction<boolean>>;
};

export type EndAdornmentProps = {
  passwordVisible: boolean;
  togglePasswordVisibility: () => void;
};

export type SignUpCredentials = {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
};
