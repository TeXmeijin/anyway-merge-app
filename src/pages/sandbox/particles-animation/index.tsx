import dynamic from "next/dynamic";
import React from "react";
import styles from "./styles.module.css";
import Seo from "~/components/Seo";

// window is not definedを回避するため、Dynamic Importを使用して動的にモジュールを読み込む
// 公式: https://nextjs.org/docs/advanced-features/dynamic-import
const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

const ParticlesAnimation = () => {
  return (
    <>
      <Seo
        title="React particles animation ｜毎日誰かのプルリクを脳死でマージするアドベントカレンダー"
        description="初日に私が空っぽのNext.jsプロジェクトを作って公開しておくので、25日間毎日誰かがPull Request出して脳死でマージしていき、12月25日に何ができているでしょう？アドベントカレンダーです。"
      />
      <div className={styles.wrapper}>
        <div className={styles.bg}>
          <h2 className={styles.heading}>
            <a href="https://github.com/lindelof/particles-bg">
              GitHub: particles-bg
            </a>
          </h2>
          <ParticlesBg type="random" />
        </div>
      </div>
    </>
  );
};

export default ParticlesAnimation;
