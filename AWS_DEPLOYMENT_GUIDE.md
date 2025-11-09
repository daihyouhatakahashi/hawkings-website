# Hawkings Inc. ウェブサイト AWS デプロイ手順書

このドキュメントでは、Next.jsで構築されたHawkings Inc.のウェブサイトをAWSにデプロイする方法を説明します。

## 目次

1. [デプロイ方法の選択](#デプロイ方法の選択)
2. [方法1: AWS Amplify（推奨・最も簡単）](#方法1-aws-amplify推奨最も簡単)
3. [方法2: S3 + CloudFront（静的エクスポート）](#方法2-s3--cloudfront静的エクスポート)
4. [方法3: EC2 + PM2（フルコントロール）](#方法3-ec2--pm2フルコントロール)
5. [独自ドメインの設定](#独自ドメインの設定)

---

## デプロイ方法の選択

| 方法 | 難易度 | コスト | メリット | デメリット |
|------|--------|--------|----------|-----------|
| **AWS Amplify** | ★☆☆ | 低 | 自動デプロイ、SSL自動、簡単 | Amplify固有の制約あり |
| **S3 + CloudFront** | ★★☆ | 低 | 高速、スケーラブル | 静的エクスポートのみ |
| **EC2 + PM2** | ★★★ | 中 | 完全なコントロール | サーバー管理が必要 |

**推奨**: 初めての方は **AWS Amplify** が最も簡単です。

---

## 方法1: AWS Amplify（推奨・最も簡単）

### 前提条件
- AWSアカウント
- GitHubアカウント（またはGitLab/Bitbucket）

### 手順

#### 1. GitHubリポジトリの準備

```bash
# プロジェクトディレクトリに移動
cd /path/to/nextjs-hawkings

# Gitリポジトリを初期化（まだの場合）
git init

# .gitignoreファイルを確認（node_modules, .next, .env.localが含まれていることを確認）

# ファイルをコミット
git add .
git commit -m "Initial commit"

# GitHubに新しいリポジトリを作成してプッシュ
# GitHubでリポジトリを作成後：
git remote add origin https://github.com/YOUR_USERNAME/hawkings-website.git
git branch -M main
git push -u origin main
```

#### 2. AWS Amplifyでアプリを作成

1. **AWSマネジメントコンソール**にログイン
2. **AWS Amplify**サービスを検索して開く
3. **「新しいアプリ」** → **「ウェブアプリをホスト」**をクリック
4. **GitHub**を選択して認証
5. 作成したリポジトリ（hawkings-website）を選択
6. ブランチ（main）を選択

#### 3. ビルド設定

Amplifyが自動的にNext.jsを検出し、以下のようなビルド設定を生成します：

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

必要に応じて環境変数を追加：
- **「環境変数」**タブで追加可能
- 例: `NEXT_PUBLIC_API_URL`など

#### 4. デプロイ

- **「保存してデプロイ」**をクリック
- 数分でビルドとデプロイが完了
- 自動生成されたURL（例: `https://main.xxxxxx.amplifyapp.com`）でサイトが公開されます

#### 5. 自動デプロイの確認

- GitHubのmainブランチにプッシュするたびに自動的に再デプロイされます
- Amplifyコンソールでビルドログを確認可能

---

## 方法2: S3 + CloudFront（静的エクスポート）

### 前提条件
- AWSアカウント
- AWS CLI設定済み

### 手順

#### 1. Next.jsの静的エクスポート設定

`next.config.js`を編集：

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

#### 2. ビルド

```bash
cd /path/to/nextjs-hawkings
npm install
npm run build
```

ビルド後、`out/`ディレクトリに静的ファイルが生成されます。

#### 3. S3バケットの作成

```bash
# バケット名を設定（グローバルで一意である必要があります）
BUCKET_NAME="hawkings-inc-website"

# S3バケットを作成
aws s3 mb s3://$BUCKET_NAME --region ap-northeast-1

# 静的ウェブサイトホスティングを有効化
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document 404.html
```

#### 4. ファイルをS3にアップロード

```bash
# outディレクトリの内容をS3にアップロード
aws s3 sync out/ s3://$BUCKET_NAME --delete

# パブリックアクセスを許可
aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy '{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::'$BUCKET_NAME'/*"
    }
  ]
}'
```

#### 5. CloudFrontディストリビューションの作成

1. **AWSマネジメントコンソール** → **CloudFront**
2. **「ディストリビューションを作成」**をクリック
3. 設定：
   - **オリジンドメイン**: S3バケットを選択
   - **ビューワープロトコルポリシー**: Redirect HTTP to HTTPS
   - **デフォルトルートオブジェクト**: `index.html`
   - **カスタムエラーレスポンス**:
     - HTTPエラーコード: 404
     - レスポンスページパス: `/404.html`
     - HTTPレスポンスコード: 404
4. **「ディストリビューションを作成」**をクリック

#### 6. アクセス確認

- CloudFrontのドメイン名（例: `d111111abcdef8.cloudfront.net`）でアクセス可能
- SSL証明書は自動的に提供されます（*.cloudfront.netドメイン用）

---

## 方法3: EC2 + PM2（フルコントロール）

### 前提条件
- EC2インスタンス（Ubuntu 22.04 LTS推奨）
- Node.js 18以上インストール済み

### 手順

#### 1. EC2インスタンスの準備

```bash
# EC2にSSH接続
ssh -i your-key.pem ubuntu@your-ec2-ip

# システムアップデート
sudo apt update && sudo apt upgrade -y

# Node.jsのインストール（Node.js 18）
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# PM2のインストール
sudo npm install -g pm2

# Nginxのインストール（リバースプロキシ用）
sudo apt install -y nginx
```

#### 2. プロジェクトのデプロイ

```bash
# ホームディレクトリに移動
cd ~

# Gitからクローン（または直接ファイルをアップロード）
git clone https://github.com/YOUR_USERNAME/hawkings-website.git
cd hawkings-website

# 依存関係のインストール
npm install

# ビルド
npm run build

# PM2でアプリを起動
pm2 start npm --name "hawkings-website" -- start

# PM2を自動起動に設定
pm2 startup
pm2 save
```

#### 3. Nginxの設定

```bash
# Nginx設定ファイルを作成
sudo nano /etc/nginx/sites-available/hawkings
```

以下の内容を貼り付け：

```nginx
server {
    listen 80;
    server_name hawkings-inc.com www.hawkings-inc.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

設定を有効化：

```bash
# シンボリックリンクを作成
sudo ln -s /etc/nginx/sites-available/hawkings /etc/nginx/sites-enabled/

# デフォルト設定を削除
sudo rm /etc/nginx/sites-enabled/default

# Nginx設定をテスト
sudo nginx -t

# Nginxを再起動
sudo systemctl restart nginx
```

#### 4. SSL証明書の設定（Let's Encrypt）

```bash
# Certbotのインストール
sudo apt install -y certbot python3-certbot-nginx

# SSL証明書の取得と自動設定
sudo certbot --nginx -d hawkings-inc.com -d www.hawkings-inc.com

# 自動更新のテスト
sudo certbot renew --dry-run
```

#### 5. ファイアウォール設定

```bash
# UFWを有効化
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

---

## 独自ドメインの設定

### AWS Amplifyの場合

1. **Amplifyコンソール** → **「ドメイン管理」**
2. **「ドメインを追加」**をクリック
3. `hawkings-inc.com`を入力
4. DNSレコードを設定（Route 53を使用している場合は自動）
5. SSL証明書は自動的に発行されます

### S3 + CloudFrontの場合

1. **Route 53**でホストゾーンを作成（または既存のDNSプロバイダーを使用）
2. **Certificate Manager**でSSL証明書をリクエスト（us-east-1リージョン）
3. **CloudFront**ディストリビューションに証明書を関連付け
4. **Alternate Domain Names (CNAMEs)**に`hawkings-inc.com`と`www.hawkings-inc.com`を追加
5. **Route 53**（またはDNSプロバイダー）でAレコード（Alias）を作成してCloudFrontを指定

### EC2の場合

1. **Route 53**（またはDNSプロバイダー）でAレコードを作成
2. EC2のElastic IPを取得して関連付け
3. DNSレコードでElastic IPを指定
4. Certbotで既にSSL設定済み（上記手順参照）

---

## 更新手順

### AWS Amplifyの場合
```bash
# コードを変更してGitHubにプッシュするだけ
git add .
git commit -m "Update content"
git push origin main
# 自動的にデプロイされます
```

### S3 + CloudFrontの場合
```bash
# ビルド
npm run build

# S3にアップロード
aws s3 sync out/ s3://$BUCKET_NAME --delete

# CloudFrontキャッシュを無効化
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### EC2の場合
```bash
# EC2にSSH接続
ssh -i your-key.pem ubuntu@your-ec2-ip

# プロジェクトディレクトリに移動
cd ~/hawkings-website

# 最新のコードを取得
git pull origin main

# 依存関係を更新（必要な場合）
npm install

# ビルド
npm run build

# PM2でアプリを再起動
pm2 restart hawkings-website
```

---

## トラブルシューティング

### ビルドエラーが発生する場合

```bash
# node_modulesと.nextを削除して再ビルド
rm -rf node_modules .next
npm install
npm run build
```

### 画像が表示されない場合

- `next.config.js`で`images.unoptimized: true`が設定されているか確認（S3の場合）
- 画像ファイルが`public/`ディレクトリに存在するか確認

### CloudFrontで古いコンテンツが表示される場合

```bash
# キャッシュを無効化
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

---

## セキュリティのベストプラクティス

1. **環境変数の管理**
   - `.env.local`をGitにコミットしない
   - AWS Systems Manager Parameter Storeを使用

2. **IAMロールの最小権限**
   - 必要最小限の権限のみを付与

3. **定期的なアップデート**
   ```bash
   npm audit
   npm update
   ```

4. **WAF（Web Application Firewall）の設定**
   - CloudFrontにAWS WAFを関連付け

---

## コスト見積もり（月額・概算）

| 方法 | 想定コスト（月額） |
|------|-------------------|
| AWS Amplify | $0〜$15（トラフィック次第） |
| S3 + CloudFront | $1〜$10（トラフィック次第） |
| EC2 t3.micro | $8〜$15（インスタンス料金） |

※ 実際のコストはトラフィック量、データ転送量によって変動します。

---

## サポート

質問や問題がある場合は、以下までご連絡ください：

- Email: global@hawkings-inc.com
- Tel: 03-6412-7668

---

**作成日**: 2025年11月9日  
**最終更新**: 2025年11月9日
