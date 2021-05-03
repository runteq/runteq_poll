# RUNTEQ POLL

## RUNTEQ生向けのOSSアプリ
- Vueを使う生徒さんが増えてきた
- チーム開発の場が少ない
- コミュニティを盛り上げる施策として

上記の理由からOSSにしました。</br>
自分でissue切るのもOKです！ チーム開発してみたい方は是非！ </br>
疑問点があったら連絡してください。

## 使用技術
### Nuxt.js
- Vue.js (2.x系)
- Vuetify
- Vuefire → Cloud Firestoreと接続するやつ

### Firebase
- Hosting
- Cloud Firestore
- Authentication (使うかも？)

### テスト
- jest

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
