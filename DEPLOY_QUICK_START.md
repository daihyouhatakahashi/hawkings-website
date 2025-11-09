# クイックスタート: サイト更新手順

既存のhawkings-inc.comサイトを更新する最も簡単な方法を説明します。

## 🎯 最も簡単な方法: AWS Amplify

現在AWSを使用されているとのことですので、AWS Amplifyを使った更新が最もスムーズです。

### 準備するもの
- GitHubアカウント
- AWSアカウント（既にお持ち）

---

## ステップ1: GitHubにコードをアップロード

### 1-1. GitHubでリポジトリを作成

1. [GitHub](https://github.com)にログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ名: `hawkings-website`（任意）
4. 「Create repository」をクリック

### 1-2. コードをプッシュ

ターミナル（コマンドプロンプト）で以下を実行：

```bash
# プロジェクトディレクトリに移動
cd /path/to/nextjs-hawkings

# Gitリポジトリを初期化
git init

# すべてのファイルを追加
git add .

# コミット
git commit -m "Initial commit"

# GitHubのリポジトリに接続（YOUR_USERNAMEを自分のユーザー名に変更）
git remote add origin https://github.com/YOUR_USERNAME/hawkings-website.git

# プッシュ
git branch -M main
git push -u origin main
```

---

## ステップ2: AWS Amplifyでデプロイ

### 2-1. AWS Amplifyを開く

1. [AWSマネジメントコンソール](https://console.aws.amazon.com/)にログイン
2. 検索バーで「Amplify」と入力して選択
3. 「新しいアプリ」→「ウェブアプリをホスト」をクリック

### 2-2. GitHubと接続

1. 「GitHub」を選択
2. GitHubアカウントで認証
3. 作成したリポジトリ（hawkings-website）を選択
4. ブランチ「main」を選択
5. 「次へ」をクリック

### 2-3. ビルド設定

- 自動的にNext.jsが検出されます
- そのまま「次へ」をクリック

### 2-4. デプロイ開始

1. 「保存してデプロイ」をクリック
2. 5〜10分待つとデプロイ完了
3. 自動生成されたURL（例: `https://main.xxxxxx.amplifyapp.com`）でサイトが公開されます

---

## ステップ3: 独自ドメイン（hawkings-inc.com）を設定

### 3-1. Amplifyでドメインを追加

1. Amplifyコンソールで「ドメイン管理」タブを開く
2. 「ドメインを追加」をクリック
3. `hawkings-inc.com`と入力
4. 「ドメインを設定」をクリック

### 3-2. DNSレコードを更新

#### Route 53を使用している場合
- 自動的に設定されます

#### 他のDNSプロバイダー（お名前.com、ムームードメインなど）を使用している場合
1. Amplifyが表示するCNAMEレコードをコピー
2. DNSプロバイダーの管理画面で以下を設定：
   - タイプ: CNAME
   - ホスト: www
   - 値: Amplifyが表示した値
   - タイプ: ANAME/ALIAS（またはAレコード）
   - ホスト: @
   - 値: Amplifyが表示した値

3. DNS設定が反映されるまで数時間〜48時間待つ

### 3-3. SSL証明書の確認

- AWS Amplifyが自動的にSSL証明書を発行します
- 特別な設定は不要です

---

## ステップ4: 今後の更新方法

### コードを変更したら

```bash
# ファイルを編集後

# 変更をコミット
git add .
git commit -m "Update content"

# GitHubにプッシュ
git push origin main
```

**これだけで自動的に再デプロイされます！**

---

## 🔄 現在のサイトからの切り替え

### 方法1: DNSを切り替える（推奨）

1. 新しいサイトが正しく動作することを確認
2. DNSレコードを新しいAmplifyのURLに変更
3. 古いサイトは削除せず、しばらく残しておく

### 方法2: 段階的に移行

1. まず`test.hawkings-inc.com`などのサブドメインで公開
2. 問題がないことを確認後、メインドメインを切り替え

---

## ✅ チェックリスト

デプロイ前に確認：

- [ ] ロゴ画像が正しく表示されるか
- [ ] すべてのページが正しく表示されるか
- [ ] お問い合わせフォームが動作するか
- [ ] モバイルで正しく表示されるか
- [ ] 会社情報（住所、電話番号など）が正しいか

---

## 🆘 トラブルシューティング

### ビルドが失敗する

```bash
# ローカルで確認
npm install
npm run build

# エラーが出なければOK
```

### ロゴが表示されない

- `public/logo.png`が存在するか確認
- GitHubにプッシュされているか確認

### サイトが表示されない

- Amplifyのビルドログを確認
- DNS設定が正しいか確認（nslookupコマンドで確認可能）

---

## 📞 サポート

わからないことがあれば、以下までご連絡ください：

- Email: global@hawkings-inc.com
- Tel: 03-6412-7668

---

**所要時間**: 初回 30分〜1時間  
**次回以降の更新**: 5分以内
