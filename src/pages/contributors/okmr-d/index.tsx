import styles from "./styles.module.css";
import ContributerHeading from "../../../components/atoms/contributer-heading/index";

function OkumuraDaiki() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__inner}>
          <ContributerHeading>Daiki OKUMURA</ContributerHeading>
          <p>ウェッブエンジニャー🐱</p>
          <p>
            <a
              target="_blank"
              rel="noreferer noreferrer"
              href="https://twitter.com/okumura_daiki"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OkumuraDaiki;
