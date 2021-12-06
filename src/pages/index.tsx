import Head from "next/head";
import Link from "next/link";
import { VFXSpan, VFXImg } from "react-vfx";
import type { NextPage } from "next";
import Navbar from "~/components/atoms/navbar";
import { contributors } from "~/constants";
import { useRealtimeCursor, RealtimeCursors } from "~/libs/realtime-cursor";
import styles from "~/styles/Home.module.css";

const Home: NextPage = () => {
  const [ref, pointers] = useRealtimeCursor();

  return (
    <>
      <Head>
        <title>毎日誰かのプルリクを脳死でマージするアドベントカレンダー</title>
        <meta
          name="description"
          content="初日に私が空っぽのNext.jsプロジェクトを作って公開しておくので、25日間毎日誰かがPull Request出して脳死でマージしていき、12月25日に何ができているでしょう？アドベントカレンダーです。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.container} ref={ref}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <a href="https://qiita.com/advent-calendar/2021/full-scratch-awesome-app-nextjs">
              毎日誰かのプルリクを脳死でマージするアドベントカレンダー
            </a>
            <br />
            へ
            <br />
            <VFXSpan shader="">ようこそ！</VFXSpan>
          </h1>

          <p className={styles.description}>
            詳しい説明は<code className={styles.code}>README.md</code>
            をご覧ください。
          </p>
          <p className={styles.description}>
            このトップページについても、とりあえずテンプレのページをちょっと書き換えただけなので、自由に編集してOKです。
          </p>
          <p className={styles.description}>
            なんか機能を追加したら導線をトップページに追加するのもOKです。
          </p>

          <h2 className={styles.subtitle}>
            <VFXSpan>contributors</VFXSpan>
          </h2>

          <div>
            <ul className={styles.list}>
              {contributors.map((member) => (
                <li key={member} className={styles.listitem}>
                  <Link href={`/contributors/${member}`}>{member}</Link>
                </li>
              ))}
            </ul>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <VFXImg
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
        <RealtimeCursors pointers={pointers} />
      </div>
    </>
  );
};

export default Home;
