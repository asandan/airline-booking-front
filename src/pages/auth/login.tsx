import { CredentialsHandler } from "@/components";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export default function LoginPage() {
  console.log(process.env.NEXTAUTH_URL, process.env.NEXT_AUTH_SECRET)
  return <CredentialsHandler credentialsType="login" />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
      return {redirect: {destination: "/"}};
  }

  return {
      props: {}
  };
}