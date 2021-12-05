import styles from './styles.module.css';
import ContributerHeading from '../../../components/atoms/contributer-heading/index';

function Yujiro() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__inner}>
          <ContributerHeading>yujiro</ContributerHeading>
          <p>ProAca CEO</p>
          <p>
            エンジニアとして働きながら、プログラミングスクールと学習塾を経営してます！
          </p>
          <p>
            <a
              target="_blank"
              rel="noreferer noreferrer"
              href="https://twitter.com/fe_js_engineer"
            >
              Twitter
            </a>
            ,{' '}
            <a
              target="_blank"
              rel="noreferer noreferrer"
              href="https://proaca.tech/"
            >
              ProAca.tech
            </a>
          </p>
          <h2>お知らせ</h2>
          <p style={{ fontSize: '2em' }}>
            <a
              target="_blank"
              rel="noreferer noreferrer"
              href="https://proaca.tech/"
            >
              ProAca
            </a>
            では、 一緒に働いてくれるエンジニアを絶賛採用中です！
          </p>
          <p>
            <br />
            プログラミングスクールを通じて世に多くのプロダクトを生み出す組織を作りだします！
            <br />
            主に、Next.js・React・TypeScript・Firebaseを用いて開発をしていきます。
            <br />
            プログラミング・育成・チーム開発に興味がある人は是非ご連絡ください!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Yujiro;
