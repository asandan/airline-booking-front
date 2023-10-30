export type LoginData = {
  email: number;
  password: string;
};

export const login = async (loginData: LoginData): Promise<any> => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(loginData),
    }
  );
  if (!response.ok) {
    const errorResponse = await response.json();
    console.error("login error: ", errorResponse.message);
    throw new Error(errorResponse.message);
  }
  return await response.json();
};
