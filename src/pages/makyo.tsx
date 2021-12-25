import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Navbar from "~/components/atoms/navbar";
import Seo from "~/components/Seo";
import goodEngineer from "~/libs/Makyo";

const Makyo: NextPage = () => {
  const [input, setInput] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const result: boolean = goodEngineer(input);
    setMessage(
      result
        ? "ですよね！！さすがわかっていらっしゃる！！"
        : "えっちょ（引き気味）"
    );
  }, [input]);

  return (
    <>
      <Seo
        title="魔境のページ｜毎日誰かのプルリクを脳死でマージするアドベントカレンダー"
        description="初日に私が空っぽのNext.jsプロジェクトを作って公開しておくので、25日間毎日誰かがPull Request出して脳死でマージしていき、12月25日に何ができているでしょう？アドベントカレンダーです。"
      />
      <div style={{ minHeight: "100vh" }}>
        <Navbar />
        <div style={{ width: "92.5%", maxWidth: "1500px", margin: "0 auto" }}>
          <h1 style={{ margin: "1rem 0", borderBottom: "solid 1px #BBB" }}>
            魔境のページ
          </h1>
          <section>
            <h2 style={{ marginBottom: ".5rem" }}>
              素晴らしいエンジニアかどうか簡単な問題でテストしてみましょう！
            </h2>
            <p>
              もちろんPHPですよね！！ （ネタです。真に受けないでください。。。
            </p>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <b>{message}</b>
          </section>
        </div>
      </div>
    </>
  );
};
export default Makyo;
