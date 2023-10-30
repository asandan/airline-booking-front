import Navbar from "@/components/NavBar";
import "@/styles/globals.css";
import { themeObject } from "@/util";
import { ThemeProvider, createTheme } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const theme = createTheme(themeObject());
  const router = useRouter();
  const isLoginPage = router.pathname.includes("auth");

  useEffect(() => {
    if (!session) {
      router.push("/auth/login");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <main className={`${isLoginPage && "overflow-hidden h-[100vh]"}`}>
          {!isLoginPage && <Navbar />}
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </ThemeProvider>
  );
}
