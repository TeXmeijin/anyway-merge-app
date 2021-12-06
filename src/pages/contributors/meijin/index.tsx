import styles from "./styles.module.css";
import ContributerHeading from "~/components/atoms/contributer-heading/index";

function Meijin() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__inner}>
          <ContributerHeading>meijin</ContributerHeading>
          <p>株式会社NoSchool CTO</p>
          <p>本企画の主催です</p>
          <p>
            <a
              target="_blank"
              rel="noreferer noreferrer"
              href="https://twitter.com/meijin_garden"
            >
              Twitter
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noreferer noreferrer"
              href="https://meijin.dev"
            >
              meijin.dev
            </a>
          </p>
          <h2>告知</h2>
          <p>
            <a
              target="_blank"
              rel="noreferer noreferrer"
              href="https://manalink.jp"
            >
              オンライン家庭教師マナリンク
            </a>
            ではエンジニアを絶賛採用中です！Twitter DMや「マナリンク
            テックブログ」で検索すると求人ページにたどり着けると思うのでそこからお問合せください！
          </p>
          {/* こんな雑な埋め込みでちゃんと動くのか知らないけどこれのためにembed用のライブラリ入れたりするの面倒なので適当にこれで。 */}
          <div
            dangerouslySetInnerHTML={{
              __html: `<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今日も今日とてマナリンクでは絶賛採用中です！<br>オンライン家庭教師サービスやってます！<br>ハードル高いかも、とかスタートアップよく分からんという方、現職を続けながら”おためし副業”してみませんか？<br>TypeScriptとDIコンテナが好きなCTOが待ってます🙏 <a href="https://t.co/FbNqoMdQUi">pic.twitter.com/FbNqoMdQUi</a></p>&mdash; 名人｜マナリンクCTO (@Meijin_garden) <a href="https://twitter.com/Meijin_garden/status/1465262231218634753?ref_src=twsrc%5Etfw">November 29, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Meijin;
