import type { NextPage } from "next";
import Navbar from "~/components/atoms/navbar";
import Auth from "~/components/Auth";
import Seo from "~/components/Seo";

const Dashboard: NextPage = () => {
  return (
    <Auth>
      <Seo
        title="ダッシュボード｜毎日誰かのプルリクを脳死でマージするアドベントカレンダー"
        description="初日に私が空っぽのNext.jsプロジェクトを作って公開しておくので、25日間毎日誰かがPull Request出して脳死でマージしていき、12月25日に何ができているでしょう？アドベントカレンダーです。"
      />
      <div style={{ minHeight: "100vh" }}>
        <Navbar />
        <div>ログインユーザーしか閲覧できない秘密のページ</div>
      </div>
    </Auth>
  );
};

export default Dashboard;
