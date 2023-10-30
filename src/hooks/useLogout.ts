import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const useLogout = () => {
  const { push } = useRouter();

  return useCallback(async () => {
    await signOut({
      redirect: false,
    });
    push("/auth/login");
  }, []);
};
