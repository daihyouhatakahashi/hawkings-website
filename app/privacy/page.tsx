import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'プライバシーポリシー - Hawkings Inc.',
  description: 'Hawkings Inc.の個人情報保護方針とプライバシーポリシーです。',
}

export default function PrivacyPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-hawkings-bg/95 backdrop-blur-md border-b border-hawkings-border">
        <div className="max-w-[1600px] mx-auto px-4 md:px-16 py-8 flex justify-between items-center">
          <Link 
            href="/" 
            className="font-serif text-2xl font-light text-hawkings-black tracking-wide hover:opacity-70 transition-hawkings"
          >
            HAWKINGS
          </Link>
          <Link 
            href="/" 
            className="text-xs font-medium uppercase tracking-extra-wide text-hawkings-gray hover:text-hawkings-black transition-hawkings"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-[900px] mx-auto px-4 md:px-16 py-48">
        <h1 className="font-serif text-5xl font-light mb-16 text-center tracking-wide">
          プライバシーポリシー
        </h1>

        <div className="space-y-16">
          <article className="pb-12 border-b border-hawkings-border">
            <h2 className="text-xl font-semibold mb-6">1. 個人情報の取得</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
              当社は、お問い合わせフォーム、サービス利用登録等を通じて、お名前、メールアドレスなどの個人情報を取得することがあります。
            </p>
          </article>

          <article className="pb-12 border-b border-hawkings-border">
            <h2 className="text-xl font-semibold mb-6">2. 個人情報の利用目的</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light mb-4">
              取得した個人情報は、以下の目的で利用いたします。
            </p>
            <ul className="list-disc list-inside text-[15px] text-hawkings-gray leading-relaxed font-light space-y-2 pl-4">
              <li>お問い合わせへの対応</li>
              <li>サービスの提供・運営</li>
              <li>サービス改善のための分析</li>
              <li>重要なお知らせの配信</li>
              <li>キャンペーン・イベント情報の配信（事前同意がある場合）</li>
            </ul>
          </article>

          <article className="pb-12 border-b border-hawkings-border">
            <h2 className="text-xl font-semibold mb-6">3. 個人情報の第三者提供</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
              当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供いたしません。
            </p>
          </article>

          <article className="pb-12 border-b border-hawkings-border">
            <h2 className="text-xl font-semibold mb-6">4. 個人情報の管理</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
              当社は、個人情報の漏洩・滅失・毀損を防止するため、適切なセキュリティ対策を講じます。
            </p>
          </article>

          <article className="pb-12 border-b border-hawkings-border">
            <h2 className="text-xl font-semibold mb-6">5. Cookie（クッキー）の使用</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
              当社ウェブサイトでは、利便性の向上やアクセス解析のためにCookieを使用することがあります。Cookieの使用を望まない場合は、ブラウザの設定で無効化できますが、一部機能が利用できなくなる可能性があります。
            </p>
          </article>

          <article className="pb-12 border-b border-hawkings-border">
            <h2 className="text-xl font-semibold mb-6">6. アクセス解析ツール</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
              当社は、サービス向上のためGoogle Analyticsなどのアクセス解析ツールを使用することがあります。これらのツールは匿名で情報を収集しており、個人を特定するものではありません。
            </p>
          </article>

          <article className="pb-12 border-b border-hawkings-border">
            <h2 className="text-xl font-semibold mb-6">7. 開示・訂正・削除</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
              ご本人から個人情報の開示・訂正・削除をご希望される場合は、当社お問い合わせ窓口までご連絡ください。本人確認の上、合理的な期間内に対応いたします。
            </p>
          </article>

          <article className="pb-12 border-b border-hawkings-border">
            <h2 className="text-xl font-semibold mb-6">8. プライバシーポリシーの変更</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
              当社は、法令改正やサービス内容の変更等に応じて、本ポリシーを変更することがあります。変更後のポリシーは本ページに掲載した時点で効力を生じます。
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold mb-6">9. お問い合わせ窓口</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light mb-4">
              個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
            </p>
            <div className="bg-hawkings-bg-alt p-8 border border-hawkings-border">
              <p className="text-[15px] text-hawkings-charcoal leading-relaxed font-light">
                Hawkings 株式会社<br />
                〒153-0043 東京都目黒区東山1-22-21<br />
                Email: global@hawkings-inc.com<br />
                Tel: 03-6412-7668
              </p>
            </div>
          </article>
        </div>

        <div className="mt-16 text-right">
          <p className="text-sm text-hawkings-gray">制定日: 2025年3月10日</p>
          <p className="text-sm text-hawkings-gray">最終更新: 2025年11月9日</p>
        </div>
      </main>

      <footer className="text-center py-16 border-t border-hawkings-border">
        <p className="text-[11px] text-hawkings-light-gray uppercase tracking-wide">
          © 2025 Hawkings Inc. All Rights Reserved.
        </p>
      </footer>
    </>
  )
}
