import Head from "next/head";
import { FC } from "react";

export const SEOHead: FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
