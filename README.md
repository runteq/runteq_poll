# runteq_poll

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## FirebaseのプロジェクトID設定手順
1. 廣瀬からFIREBASE_PROJECT_IDを貰う
2. srcディレクトリに.envファイル作成
3. 貰ったIDを.envファイルで設定　`FIREBASE_PROJECT_ID = 'PROJECT_ID'`

これで本番のFirestorerと接続できるようになります。

## 見て欲しいドキュメント
このアプリについて
https://github.com/runteq/runteq_poll/issues/18

デザインについて
https://github.com/runteq/runteq_poll/issues/17

Firestoreのデータ構造について
https://github.com/runteq/runteq_poll/issues/19

Firestoreを使用したチーム開発について
https://github.com/runteq/runteq_poll/issues/20
