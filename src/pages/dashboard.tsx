import Head from "next/head";
import type { NextPage } from "next";
import Navbar from "~/components/atoms/navbar";
import Auth from "~/components/Auth";

const Dashboard: NextPage = () => {
  return (
    <Auth>
      <Head>
        <title>ダッシュボード</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div>ログインユーザーしか閲覧できない秘密のページ</div>
    </Auth>
  );
};

export default Dashboard;
