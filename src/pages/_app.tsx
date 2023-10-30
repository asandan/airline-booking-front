import "@/styles/globals.css";
import { themeObject } from "@/util";
import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "@/components/NavBar/index";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme(themeObject());

  const router = useRouter();
  const isLoginOrSignUpPage =
    router.pathname === "/auth/login" || router.pathname === "/auth/sign-up";

  return (
    <ThemeProvider theme={theme}>
      {!isLoginOrSignUpPage && <Navbar />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
