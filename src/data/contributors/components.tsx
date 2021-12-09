export const Meijin: React.VFC = () => (
  <>
    <h3>告知</h3>
    <div>
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
  </>
);

export const Kshibayama: React.VFC = () => (
  <>
    <h3>告知</h3>
    <div>
      <p>
        こんにちは！
        <br />
        <a href="https://www.sheepmedical.com/">SheepMedical </a>
        という健康福祉・未病分野を事業領域とする会社で、
        フロントエンドエンジニアとして働いている者です。
      </p>
    </div>

    <div>
      <p>
        会社として全方位積極採用中(エンジニアも、プロダクトも、ビジネスも、ドクターも！)ですので、興味ある方は下記採用サイトをご覧ください！
        <ul>
          <li>
            See:{" "}
            <a href="https://recruit.sheepmedical.com/">
              https://recruit.sheepmedical.com/
            </a>
          </li>
        </ul>
      </p>
    </div>
  </>
);
