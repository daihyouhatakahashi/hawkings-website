# Formspree セットアップ手順（2分で完了）

お問い合わせフォームからメールを受信できるようにするための設定手順です。

---

## 📋 必要なもの

- メールアドレス（お問い合わせを受け取りたいアドレス）
- 例: contact@hawkings-inc.com

---

## ステップ1: Formspreeアカウント作成（1分）

### 1-1. Formspreeにアクセス

[https://formspree.io/](https://formspree.io/) を開く

### 1-2. アカウント作成

1. 右上の「Get Started」または「Sign Up」をクリック
2. メールアドレスとパスワードを入力
3. 「Create Account」をクリック
4. 確認メールが届くので、リンクをクリックして認証

---

## ステップ2: フォームを作成（1分）

### 2-1. 新しいフォームを作成

1. ログイン後、「+ New Form」をクリック
2. フォーム名を入力（例: Hawkings Contact Form）
3. 「Create Form」をクリック

### 2-2. メール受信先を設定

1. 「Settings」タブを開く
2. 「Email Notifications」セクションで受信先メールアドレスを確認
   - デフォルトではアカウント作成時のメールアドレス
   - 変更したい場合は「Add Email」で追加可能
3. 例: `contact@hawkings-inc.com` を追加

### 2-3. Form IDをコピー

1. 「Integration」タブを開く
2. **Form ID**（例: `xyzabc12`）が表示されます
3. このIDをコピーしておく

---

## ステップ3: プロジェクトに設定

### 方法A: 環境変数で設定（推奨）

#### ローカル開発の場合

プロジェクトのルートディレクトリに `.env.local` ファイルを作成：

```bash
# .env.local
NEXT_PUBLIC_FORMSPREE_FORM_ID=xyzabc12
```

※ `xyzabc12` の部分をステップ2-3でコピーしたForm IDに置き換えてください

#### AWS Amplifyでデプロイする場合

1. Amplifyコンソールを開く
2. アプリを選択
3. 左メニューの「環境変数」をクリック
4. 「変数を追加」をクリック
5. 以下を入力：
   - **変数名**: `NEXT_PUBLIC_FORMSPREE_FORM_ID`
   - **値**: `xyzabc12`（ステップ2-3でコピーしたID）
6. 「保存」をクリック
7. 再デプロイ

### 方法B: コードに直接記述（簡単だが非推奨）

`components/ContactForm.tsx` の17行目を編集：

```typescript
// 変更前
const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'YOUR_FORM_ID'

// 変更後（xyzabc12を実際のForm IDに置き換え）
const formspreeId = 'xyzabc12'
```

---

## ステップ4: 動作確認

### 4-1. ローカルで確認（任意）

```bash
# 開発サーバーを起動
npm run dev

# ブラウザで http://localhost:3000 を開く
# お問い合わせフォームから送信してみる
```

### 4-2. メールを確認

- 設定したメールアドレス（例: contact@hawkings-inc.com）にメールが届くことを確認
- 初回送信時は確認が必要な場合があります

---

## 📧 受信するメールの内容

お問い合わせがあると、以下のような内容のメールが届きます：

```
件名: New submission from Hawkings Contact Form

From: Formspree <noreply@formspree.io>

name: 山田太郎
email: yamada@example.com
category: サービスについて
message: 御社のサービスについて詳しく知りたいです。
```

---

## 🎨 カスタマイズ（任意）

### 自動返信メールを設定

1. Formspreeの「Settings」タブを開く
2. 「Autoresponder」セクションで「Enable」をクリック
3. 返信メールの件名と本文を入力
4. 「Save」をクリック

例:
```
件名: お問い合わせありがとうございます - Hawkings株式会社

本文:
お問い合わせいただきありがとうございます。
Hawkings株式会社でございます。

ご連絡いただいた内容を確認し、2営業日以内にご返信いたします。

今しばらくお待ちくださいませ。

---
Hawkings株式会社
〒153-0043 目黒区東山1-22-21
Tel: 03-6412-7668
Email: contact@hawkings-inc.com
```

### スパム対策を有効化

1. 「Settings」タブを開く
2. 「reCAPTCHA」セクションで「Enable」をクリック
3. Google reCAPTCHAのサイトキーを入力（無料プランでは利用不可）

---

## 💰 料金プラン

### Free（無料）
- **月50件まで**の送信
- 基本的な機能
- メール通知
- **おすすめ**: 月50件で十分な場合

### Gold（$10/月）
- **月1,000件まで**の送信
- 自動返信メール
- reCAPTCHA対応
- ファイルアップロード対応
- **おすすめ**: お問い合わせが多い場合

---

## ✅ チェックリスト

設定完了前に確認：

- [ ] Formspreeアカウントを作成した
- [ ] フォームを作成してForm IDを取得した
- [ ] 受信先メールアドレスを設定した
- [ ] 環境変数またはコードにForm IDを設定した
- [ ] テスト送信して、メールが届くことを確認した

---

## 🆘 トラブルシューティング

### メールが届かない

1. **迷惑メールフォルダを確認**
   - Formspreeからのメールが迷惑メールに振り分けられている可能性

2. **Form IDが正しいか確認**
   - 環境変数またはコードに設定したIDが正しいか確認

3. **初回送信の確認**
   - 初回送信時は、Formspreeから確認メールが届く場合があります
   - メール内のリンクをクリックして確認

### エラーが表示される

1. **ネットワーク接続を確認**
2. **Form IDが正しいか確認**
3. **Formspreeのステータスページを確認**: [https://status.formspree.io/](https://status.formspree.io/)

---

## 📞 サポート

### Formspreeのサポート
- ドキュメント: [https://help.formspree.io/](https://help.formspree.io/)
- メール: support@formspree.io

### Hawkingsのサポート
- Email: global@hawkings-inc.com
- Tel: 03-6412-7668

---

**所要時間**: 2分  
**難易度**: ★☆☆☆☆（とても簡単）  
**コスト**: 無料（月50件まで）
