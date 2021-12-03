import styles from "./styles.module.css";
import ContributerHeading from "../../../components/atoms/contributer-heading/index";

function Meijin() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__inner}>
          <ContributerHeading>Aiji Uejima</ContributerHeading>
          <p>株式会社エイチームライフスタイルでリードエンジニアやってます</p>
          <p>トップページのリアルタイムカーソルを実装しました</p>
          <p>
            <a
              target="_blank"
              rel="noreferer noreferrer"
              href="https://twitter.com/aiji42_dev"
            >
              Twitter
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noreferer noreferrer"
              href="https://github.com/aiji42"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Meijin;
