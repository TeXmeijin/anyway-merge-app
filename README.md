# 🎄 参加方法(重要)

- ブランチを適当に切って作業し、Pull Request を出してください
  - Fork したリポジトリからの Pull Request で OK です
- 私は Draft ではない Pull Request を見たら脳死でマージしてしまうので、作成途中で Pull Request を作る方は Draft にしてください
  - もしリポジトリに 2 日以上音沙汰なければ https://twitter.com/Meijin_garden までご連絡ください

## セットアップ手順

### NextAuth (ユーザー認証用)

ルートに `.env.local` ファイルを作成し、下記内容を記載すると、ユーザー名「noushi」 / パスワード「noushi」でログインできるようになります。

```
SECRET=randomstring
SIGNIN_USERNAME=noushi
SIGNIN_PASSWORD=noushi
```

# 毎日誰かのプルリクを脳死でマージするアドベントカレンダー

## 概要

### アドベントカレンダー URL

https://qiita.com/advent-calendar/2021/full-scratch-awesome-app-nextjs

### 企画概要

初日に私が空っぽの Next.js プロジェクトを作って公開しておくので、25 日間毎日誰かが Pull Request 出して脳死でマージしていき、12 月 25 日に何ができているでしょう？アドベントカレンダーです。
ノリで作ったアドベントカレンダーなので気軽に参加してください！いったい最後はどんなアプリケーションになってることやら・・・

なんの役にも立たないコンポーネント作って設置するもよし、
自分の思う最強の ESLint ルールを書き込むもよし、
Firebase 等の PaaS を接続する実装をしてセットアップ手順を README に残しておくもよしです。
考えた当初は、みんなの Next.js の知見が集まるといいなと思っていましたが、ネタ実装でも歓迎です。

### ルール/ライセンスなど

- アドベントカレンダーに記入する URL は、プルリクの URL でも、ご自身の解説記事でも OK です
- PR を出すとき、カレンダー上に登録したユーザー ID を述べてください（テンプレートにできたらします）。プルリクはリポジトリを Fork して main リポジトリに対して向けてもらうのが良いかと思います。OSS コントリビュートしたこと無い方の練習台としてもご活用ください笑
- 前の人が作った機能を改善したり影響範囲に含めるのは OK です、一方、完全に削除するのは NG です
- PR を出すのは担当当日にしてください
- 担当当日であれば複数出しても OK です。わかりやすい粒度でどうぞ
- 実装されたソースコードは MIT ライセンスとし、アドベントカレンダー終了後も作成者(@mejileben)の GitHub アカウントに残しておきます
- `/data/contributors` にデータを置いているので、開発に関わった方が自己紹介とかを書いていいものとします
- 自己紹介や告知などのコンテンツは `/data/contributors/components.tsx` に書いて `/data/contributors` にて import してください

## ToDo

- ~~脳死マージの自動化~~ [#10](https://github.com/TeXmeijin/anyway-merge-app/pull/10)

## 企画者

https://twitter.com/Meijin_garden

## 免責事項

- 本企画への参加は自己責任でお願いします。参加によって生じたいかなる損害の責任も負いません
