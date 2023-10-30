import { useRouter } from "next/router";

export const useLogout = () => {
  const { push } = useRouter();
  const logout = () => {
    // localStorage.removeItem("token");
    push("/auth/login");
  };

  return logout;
};
