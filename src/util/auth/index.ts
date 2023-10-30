import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

type GetServerSidePropsFunc<P = any> = (
  context: GetServerSidePropsContext,
  session: Session | null
) => Promise<GetServerSidePropsResult<P>>;

export function withSession(getServerSidePropsFunc: GetServerSidePropsFunc) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<{ session: Session | null }>> => {
    const session = await getSession(context);
    const props = await getServerSidePropsFunc(context, session);

    if(!session) return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      }
    }

    return {
      props: {
        ...props,
        session,
      },
    };
  };
}