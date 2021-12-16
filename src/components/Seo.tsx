import Head from "next/head";
import React from "react";

type Props = {
  title: string;
  description?: string;
};

const Seo: React.FC<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
