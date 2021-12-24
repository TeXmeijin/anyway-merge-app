import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Navbar from "~/components/atoms/navbar";
import NimTodo from "~/components/atoms/nim/todo";
import Seo from "~/components/Seo";
import { makeRequest } from "~/libs/nim";

const Nim: NextPage = () => {
  const [btc, setBtc] = useState({ usd: 0, eur: 0, gbp: 0 });
  const [time, setTime] = useState(0);

  useEffect(() => {
    let requestInterval = setInterval(async () => {
      let res = await makeRequest();
      setBtc(res);
      setTime(new Date());
    }, 3000);

    return () => {
      clearInterval(requestInterval);
    };
  }, []);

  return (
    <>
      <Seo
        title="Nimのページ｜毎日誰かのプルリクを脳死でマージするアドベントカレンダー"
        description="初日に私が空っぽのNext.jsプロジェクトを作って公開しておくので、25日間毎日誰かがPull Request出して脳死でマージしていき、12月25日に何ができているでしょう？アドベントカレンダーです。"
      />
      <div style={{ minHeight: "100vh" }}>
        <Navbar />
        <h1>Nimのページ</h1>
        <section>
          <h2>BTCの値段</h2>
          <p>{time.toLocaleString()}</p>
          <table border="1">
            <tbody>
              <tr>
                <td>USD</td>
                <td>{btc.usd}</td>
              </tr>
              <tr>
                <td>EUR</td>
                <td>{btc.eur}</td>
              </tr>
              <tr>
                <td>GBP</td>
                <td>{btc.gbp}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <NimTodo />
      </div>
    </>
  );
};

export default Nim;
