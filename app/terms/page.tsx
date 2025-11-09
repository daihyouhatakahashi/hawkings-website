import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '利用規約 - Hawkings Inc.',
  description: 'Hawkings Inc.のウェブサイト及び関連サービスの利用規約です。',
}

export default function TermsPage() {
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
          利用規約
        </h1>

        <div className="space-y-16">
          <article className="pb-12 border-b border-hawkings-border">
            <h2 className="text-xl font-semibold mb-6">第1条（適用）</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
              本規約は、当社が提供するウェブサイト及び関連サービス（以下「本サービス」）の利用条件を定めるものです。ユーザーは本規約に同意の上、本サービスを利用するものとします。
            </p>
          </article>

          <article className="pb-12 border-b border-hawkings-border">
            <h2 className="text-xl font-semibold mb-6">第2条（禁止事項）</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light mb-4">
              ユーザーは以下の行為を行ってはなりません。
            </p>
            <ol className="list-decimal list-inside text-[15px] text-hawkings-gray leading-relaxed font-light space-y-2 pl-4">
              <li>法令または公序良俗に反する行為</li>
              <li>当社または第三者の権利を侵害する行為</li>
              <li>サーバー・ネットワークに過度の負荷を与える行為</li>
              <li>不正アクセス、リバースエンジニアリング</li>
              <li>その他当社が不適切と判断する行為</li>
            </ol>
          </article>

          <article className="pb-12 border-b border-hawkings-border">
            <h2 className="text-xl font-semibold mb-6">第3条（本サービスの提供停止等）</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
              当社は、システム保守・障害・天災等やむを得ない場合、本サービスの全部または一部を停止することがあります。
            </p>
          </article>

          <article className="pb-12 border-b border-hawkings-border">
            <h2 className="text-xl font-semibold mb-6">第4条（知的財産権）</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
              本サービスに関する一切の知的財産権は当社または正当な権利者に帰属します。
            </p>
          </article>

          <article className="pb-12 border-b border-hawkings-border">
            <h2 className="text-xl font-semibold mb-6">第5条（免責）</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
              当社は、本サービスの利用に関連してユーザーに生じた損害について、一切の責任を負いません。ただし、消費者契約法その他の法令により免責が制限される場合は、この限りではありません。
            </p>
          </article>

          <article className="pb-12 border-b border-hawkings-border">
            <h2 className="text-xl font-semibold mb-6">第6条（利用規約の変更）</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
              当社は必要と判断した場合には、本規約を変更できます。変更内容はウェブサイト掲載その他当社が適当と判断する方法でユーザーに通知し、通知後にユーザーが本サービスを利用した時点で同意したものとみなします。
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold mb-6">第7条（準拠法・裁判管轄）</h2>
            <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
              本規約は日本法を準拠法とし、本サービスに関して紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </article>
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
