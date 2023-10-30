import { CredentialsHandler } from "@/components";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { SEOHead } from "@/components/SEOHead";

export default function LoginPage() {
  return (
    <>
      <SEOHead title={"Login"} />
      <CredentialsHandler credentialsType="login" />;
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    return { redirect: { destination: "/" } };
  }

  return {
    props: {},
  };
}
