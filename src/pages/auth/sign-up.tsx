import { CredentialsHandler } from "@/components";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export default function SignUpPage() {
  return (
   <CredentialsHandler credentialsType="signUp"/>
  );
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