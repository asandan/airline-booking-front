import { SignUpCredentials } from "@/util/types";

export const signUp = async (credentials: SignUpCredentials) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(credentials),
    }
  );
  if (!response.ok) {
    const errorResponse = await response.json();
    console.error("login error: ", errorResponse.message);
    throw new Error(errorResponse.message);
  }
  return await response.json();
};
