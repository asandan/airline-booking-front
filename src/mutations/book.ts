import { SignUpCredentials } from "@/util/types";

export const book = async (
  ticketId: number,
  quantity: number,
  userId: number,
  enqueueSnackbar: any
) => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/booking/book`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({ ticketId, quantity, userId }),
      }
    );
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("login error: ", errorResponse.message);
      throw new Error(errorResponse.message);
    }
    enqueueSnackbar("Booked successfully!", { variant: "success" });
    return await response.json();
  } catch (error) {
    enqueueSnackbar("Something went wrong", { variant: "error" });
  }
};
