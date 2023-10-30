import Navbar from "@/components/NavBar";
import "@/styles/globals.css";
import { themeObject } from "@/util";
import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme(themeObject());
  const router = useRouter();
  const isLoginPage = router.pathname.includes("auth");

  return (
    <ThemeProvider theme={theme}>
      {!isLoginPage && <Navbar />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
