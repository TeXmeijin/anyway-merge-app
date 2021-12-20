import Link from "next/link";
import { VFXSpan } from "react-vfx";
import type { NextPage } from "next";
import ContributorsList from "~/components/atoms/contributors-list";
import ReactConfMovie from "~/components/atoms/react-conf-movie";
import Seo from "~/components/Seo";
import { getChristmasLayout } from "~/components/templates/ChristmasLayout";
import { getLayout } from "~/components/templates/Layout";
import { pagesPath } from "~/libs/$path";
import { RealtimeCursors } from "~/libs/realtime-cursor";
import styles from "~/styles/Home.module.css";

const Home: WithLayout<NextPage> = () => {
  return (
    <>
      <Seo
        title="毎日誰かのプルリクを脳死でマージするアドベントカレンダー"
        description="初日に私が空っぽのNext.jsプロジェクトを作って公開しておくので、25日間毎日誰かがPull Request出して脳死でマージしていき、12月25日に何ができているでしょう？アドベントカレンダーです。"
      />

      <div className={styles.container}>
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
            詳しい説明は
            <a href="https://github.com/TeXmeijin/anyway-merge-app/blob/main/README.md">
              <code className={styles.code}>README.md</code>
            </a>
            をご覧ください。
          </p>
          <p className={styles.description}>
            このトップページについても、とりあえずテンプレのページをちょっと書き換えただけなので、自由に編集してOKです。
          </p>
          <p className={styles.description}>
            なんか機能を追加したら導線をトップページに追加するのもOKです。
          </p>

          <ReactConfMovie />

          <h2 className={styles.subtitle}>
            <VFXSpan>contributors</VFXSpan>
          </h2>

          <ContributorsList />

          <h2 className={styles.subtitle}>
            <VFXSpan>contents</VFXSpan>
            <ul className={styles.list}>
              {/*
              It might be better to have this list dynamically expanded.
              However, it depends on how this app would be developed.
              */}
              <li className={styles.listitem}>
                <Link href={pagesPath.sandbox.spinner.$url()}>
                  <a>Spinner!</a>
                </Link>
              </li>
              <li className={styles.listitem}>
                <Link href={pagesPath.sandbox.particles_animation.$url()}>
                  <a>Particles Animation!</a>
                </Link>
              </li>
            </ul>
          </h2>
        </main>

        <RealtimeCursors />
      </div>
    </>
  );
};

Home.layout = getLayout(getChristmasLayout());

export default Home;
