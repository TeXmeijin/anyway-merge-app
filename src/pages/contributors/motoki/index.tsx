import styles from "./styles.module.css";
import ContributerHeading from '../../../components/atoms/contributer-heading/index';

function Motoki() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__inner}>
          <ContributerHeading>Motoki Watanabe @XxGodmoonxX</ContributerHeading>
          <p>デザイン会社のソフトウェアエンジニア（フロントエンド）をしつつたまにクラブでVJ（映像演出）をしています</p>
          <p>
            <a
              target="_blank"
              rel="noreferer noreferrer"
              href="https://twitter.com/XxGodmoonxX"
            >
              Twitter
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noreferer noreferrer"
              href="https://motoki-watanabe.net"
            >
              motoki-watanabe.net
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Motoki;
