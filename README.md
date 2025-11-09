# Hawkings Inc. Corporate Website

Hawkings Inc.の公式ウェブサイト - Next.js 14とTailwind CSSで構築された高品質なコーポレートサイト。

## 🚀 技術スタック

- **Next.js 14** - App Router使用
- **TypeScript** - 型安全性の確保
- **Tailwind CSS** - ユーティリティファーストのスタイリング
- **React 18** - 最新のReact機能

## 📋 機能

- ✅ レスポンシブデザイン（モバイル・タブレット・デスクトップ対応）
- ✅ SEO最適化（メタタグ、Open Graph、Twitter Card）
- ✅ アクセシビリティ対応（ARIA属性、スクリーンリーダー対応）
- ✅ お問い合わせフォーム（バリデーション付き）
- ✅ 採用情報セクション（アコーディオンUI）
- ✅ Google Fonts最適化読み込み
- ✅ スムーズなアニメーション・トランジション

## 🛠️ セットアップ

### 必要要件

- Node.js 18.17以上
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone <repository-url>
cd nextjs-hawkings

# 依存関係のインストール
npm install
# または
yarn install
```

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
# または
yarn build
```

### 本番環境での起動

```bash
npm run start
# または
yarn start
```

## 📁 プロジェクト構造

```
nextjs-hawkings/
├── app/
│   ├── layout.tsx          # ルートレイアウト（メタデータ、フォント）
│   ├── page.tsx            # ホームページ
│   ├── globals.css         # グローバルスタイル
│   ├── terms/
│   │   └── page.tsx        # 利用規約ページ
│   └── privacy/
│       └── page.tsx        # プライバシーポリシーページ
├── components/
│   ├── Header.tsx          # ヘッダーナビゲーション
│   ├── Footer.tsx          # フッター
│   ├── ContactForm.tsx     # お問い合わせフォーム
│   ├── CareersSection.tsx  # 採用情報セクション
│   └── JobCard.tsx         # 職種カード
├── public/
│   ├── favicon.png         # ファビコン（要作成）
│   ├── apple-touch-icon.png # Appleアイコン（要作成）
│   ├── og-image.jpg        # OGイメージ（要作成）
│   └── twitter-image.jpg   # Twitterイメージ（要作成）
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 カスタマイズ

### カラーパレット

Tailwind設定（`tailwind.config.js`）でブランドカラーを定義しています：

```javascript
colors: {
  'hawkings-black': '#000000',
  'hawkings-charcoal': '#1a1a1a',
  'hawkings-gray': '#666666',
  'hawkings-light-gray': '#999999',
  'hawkings-border': '#e0e0e0',
  'hawkings-bg': '#ffffff',
  'hawkings-bg-alt': '#fafafa',
}
```

### フォント

- **セリフ体**: Cormorant Garamond（見出し用）
- **サンセリフ体**: Inter（本文用）

## 📝 TODO

### 🔴 必須対応

- [ ] **画像ファイルの作成**
  - `/public/favicon.png` (32x32px)
  - `/public/apple-touch-icon.png` (180x180px)
  - `/public/og-image.jpg` (1200x630px)
  - `/public/twitter-image.jpg` (1200x675px)

- [ ] **お問い合わせフォームAPI実装**
  - 現在はダミー処理
  - `/app/api/contact/route.ts` を作成して実装
  - または外部サービス（SendGrid、Resend等）と連携

### 🟡 推奨対応

- [ ] **スパム対策**
  - Google reCAPTCHA v3の実装
  - または Cloudflare Turnstile

- [ ] **アナリティクス**
  - Google Analytics 4の追加
  - または Plausible Analytics

- [ ] **構造化データ**
  - JSON-LD形式で組織情報を追加

### 🟢 将来的な改善

- [ ] PWA対応（service worker、manifest.json）
- [ ] 多言語対応（i18n）
- [ ] ダークモード
- [ ] パフォーマンス監視（Sentry等）

## 🔧 お問い合わせフォームAPI実装例

`app/api/contact/route.ts` を作成：

```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // メール送信処理（例: SendGrid）
  // await sendEmail(data)
  
  return NextResponse.json({ success: true })
}
```

## 🚀 デプロイ

### Vercel（推奨）

```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel
```

または、GitHubリポジトリをVercelに接続して自動デプロイ。

### その他のプラットフォーム

- Netlify
- Cloudflare Pages
- AWS Amplify

## 📱 レスポンシブブレークポイント

- **モバイル**: 〜767px
- **タブレット**: 768px〜1023px
- **デスクトップ**: 1024px〜

## 🔒 セキュリティ

- すべてのフォーム入力にバリデーション実装
- HTTPS必須
- CSP（Content Security Policy）の設定推奨
- 定期的な依存関係のアップデート

## 📄 ライセンス

© 2025 Hawkings Inc. All Rights Reserved.

## 🤝 サポート

質問や問題がある場合は、以下までご連絡ください：

- Email: global@hawkings-inc.com
- Tel: 03-6412-7668

---

**Built with ❤️ by Hawkings Inc.**
