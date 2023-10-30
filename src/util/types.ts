export type CredentialsFooterProps = {
  isLoginPage: boolean;
};

export type CredentialsHandlerProps = {
  credentialsType: "login" | "signUp";
};

export type EndAdornmentProps = {
  passwordVisible: boolean;
  togglePasswordVisibility: () => void;
}