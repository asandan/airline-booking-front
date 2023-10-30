import { getCsrfToken } from "next-auth/react";

type Login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => Promise<boolean>;

export const login: Login = async ({ email, password }) => {
  const csrfToken = await getCsrfToken();

  try {
    const response = await fetch(`/api/auth/callback/credentials`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        csrfToken,
        email,
        password,
      }),
    });

    return response.status === 200;
  } catch (error) {
    console.log("Login error", error);
    return false;
  }
};