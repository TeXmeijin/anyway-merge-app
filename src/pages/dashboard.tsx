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
      <div style={{ minHeight: "100vh" }}>
        <Navbar />
        <div>ログインユーザーしか閲覧できない秘密のページ</div>
      </div>
    </Auth>
  );
};

export default Dashboard;
