import styles from "./styles.module.css";
import ContributerHeading from "~/components/atoms/contributer-heading/index";

function Sassy() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__inner}>
          <ContributerHeading>sassy</ContributerHeading>
          <p>株式会社カケハシ エンジニア</p>
          <p>フロントエンドエンジニア兼バックエンドエンジニア</p>
          <p>
            <a
              target="_blank"
              rel="noreferer noreferrer"
              href="https://twitter.com/sassy_watson"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sassy;
