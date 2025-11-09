# クイックスタートガイド

## 1. プロジェクトのセットアップ

```bash
cd nextjs-hawkings
npm install
```

## 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

## 3. ビルドとデプロイ

### ローカルビルド
```bash
npm run build
npm run start
```

### Vercelへのデプロイ
```bash
# Vercel CLIをインストール
npm i -g vercel

# デプロイ
vercel
```

または、GitHubにプッシュしてVercelと連携してください。

## 4. 必須作業（デプロイ前）

### 画像ファイルの準備
以下の画像を `/public/` フォルダに配置してください：

- `favicon.png` (32x32px)
- `apple-touch-icon.png` (180x180px)
- `og-image.jpg` (1200x630px)
- `twitter-image.jpg` (1200x675px)

### お問い合わせフォームAPI
`/app/api/contact/route.ts` を作成：

```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // TODO: メール送信処理を実装
  // 例: SendGrid, Resend, Nodemailer等
  
  return NextResponse.json({ success: true })
}
```

## 5. 環境変数の設定

`.env.local` ファイルを作成：

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# 必要に応じて追加の環境変数を設定
```

## トラブルシューティング

### ポート3000が使用中の場合
```bash
npm run dev -- -p 3001
```

### キャッシュをクリア
```bash
rm -rf .next
npm run dev
```

---

**注意**: 本番環境へのデプロイ前に、必ず画像ファイルとAPIエンドポイントの実装を完了させてください。
