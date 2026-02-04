import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CareersSection from '@/components/CareersSection'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 md:px-16 pt-32 pb-16">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-light leading-tight mb-10 tracking-wide">
              Burn. Build.<br />Leave a legacy.
            </h1>
            <p className="text-lg text-hawkings-gray mb-16 font-light tracking-wide leading-relaxed">
              究極のプロダクト開発に全てを注ぐ
            </p>
            <a
              href="#careers"
              className="inline-block px-8 md:px-14 py-[1.125rem] bg-white text-hawkings-black text-[11px] font-medium uppercase tracking-extra-wide border border-hawkings-black hover:bg-hawkings-black hover:text-white transition-hawkings"
            >
              エンジニア募集中
            </a>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="max-w-[1600px] mx-auto px-4 md:px-16 py-32 border-b border-hawkings-border">
          <div className="text-center max-w-[900px] mx-auto mb-24">
            <span className="text-[11px] font-medium uppercase tracking-extra-wide text-hawkings-gray mb-8 block">
              Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 tracking-wide">経営哲学</h2>
            <p className="text-hawkings-gray font-light leading-relaxed">
              限りある時間を全力で生き、自分なりの生き様をプロダクトとして後世に残す。それこそが、私たちが目指す究極のプロダクト開発です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="p-8 md:p-16 md:border-r border-hawkings-border hover:bg-hawkings-bg-alt transition-hawkings">
              <div className="text-xs font-medium uppercase tracking-extra-wide text-hawkings-gray mb-8">
                MISSION
              </div>
              <h4 className="font-serif text-2xl font-normal mb-6 tracking-wide">使命</h4>
              <p className="text-hawkings-gray font-light leading-relaxed">
                究極のプロダクト開発に全てを注ぐ
              </p>
            </div>

            <div className="p-8 md:p-16 md:border-r border-hawkings-border hover:bg-hawkings-bg-alt transition-hawkings">
              <div className="text-xs font-medium uppercase tracking-extra-wide text-hawkings-gray mb-8">
                VISION
              </div>
              <h4 className="font-serif text-2xl font-normal mb-6 tracking-wide">展望</h4>
              <p className="text-hawkings-gray font-light leading-relaxed">
                世界で使われるサービス・商品のスタンダードを自らの手で創造していく
              </p>
            </div>

            <div className="p-8 md:p-16 hover:bg-hawkings-bg-alt transition-hawkings">
              <div className="text-xs font-medium uppercase tracking-extra-wide text-hawkings-gray mb-8">
                Value
              </div>
              <h4 className="font-serif text-2xl font-normal mb-6 tracking-wide">価値観</h4>
              <p className="text-hawkings-gray font-light leading-relaxed">
                妥協しない。常に最高を目指す。
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-[1600px] mx-auto px-4 md:px-16 py-32 border-b border-hawkings-border">
          <div className="text-center max-w-[900px] mx-auto mb-24">
            <span className="text-[11px] font-medium uppercase tracking-extra-wide text-hawkings-gray mb-8 block">
              Services
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 tracking-wide">サービス</h2>
            <p className="text-hawkings-gray font-light leading-relaxed">
              AIとテクノロジーで、新しい価値体験を創造します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* AXCI */}
            <div className="p-8 md:p-16 md:border-r border-hawkings-border hover:bg-hawkings-bg-alt transition-hawkings">
              <h3 className="font-serif text-[3.5rem] font-normal tracking-wide mb-2">AXCI</h3>
              <span className="text-[13px] text-hawkings-light-gray font-light tracking-wider mb-10 block">
                AI Card Grading Platform
              </span>
              <p className="text-[15px] text-hawkings-gray font-light leading-relaxed mb-10">
                スマートフォンで撮影するだけで、AIが瞬時にトレーディングカードのセンタリングを評価。誰もが気軽に、正確に、自分のコレクションの価値を知ることができるプラットフォーム。
              </p>
              <ul className="list-none mb-16">
                <li className="text-[14px] text-hawkings-charcoal py-4 border-t border-b border-hawkings-border font-light tracking-wide">
                  AIによる高精度なセンタリング評価
                </li>
                <li className="text-[14px] text-hawkings-charcoal py-4 border-b border-hawkings-border font-light tracking-wide">
                  デジタルアルバムでコレクション管理
                </li>
                <li className="text-[14px] text-hawkings-charcoal py-4 border-b border-hawkings-border font-light tracking-wide">
                  基本機能は完全無料
                </li>
              </ul>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="inline-block py-2 px-5 border border-hawkings-border text-[11px] font-medium tracking-wider uppercase text-hawkings-charcoal mr-4">
                  2026年1月 ストアリリース
                </span>
                <a
                  href="https://axci.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mr-4 text-hawkings-black text-[12px] font-medium tracking-extra-wide uppercase border-b border-hawkings-black pb-[2px] hover:opacity-50 transition-hawkings"
                >
                  VISIT AXCI
                </a>
                <a
                  href="https://apps.apple.com/jp/app/axci-センタリング測定-カード管理/id6755650844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex font-medium tracking-extra-wide hover:opacity-50 transition-hawkings"
                >
                  <img src="./download_app.svg" alt="" />
                </a>
              </div>
            </div>

            {/* TAKAUJI */}
            <div className="p-8 md:p-16 hover:bg-hawkings-bg-alt transition-hawkings">
              <h3 className="font-serif text-[3.5rem] font-normal tracking-wide mb-2">TAKAUJI</h3>
              <span className="text-[13px] text-hawkings-light-gray font-light tracking-wider mb-10 block">
                Premium Japanese Matcha
              </span>
              <p className="text-[15px] text-hawkings-gray font-light leading-relaxed mb-10">
                厳選された宇治抹茶と国産原材料のみを使用し、添加物を一切加えない本格抹茶ラテ。世界中で愛される本物の抹茶体験をお届けします。
              </p>
              <ul className="list-none mb-10">
                <li className="text-[14px] text-hawkings-charcoal py-4 border-t border-b border-hawkings-border font-light tracking-wide">
                  完全無添加の本格抹茶
                </li>
                <li className="text-[14px] text-hawkings-charcoal py-4 border-b border-hawkings-border font-light tracking-wide">
                  厳選された日本産原材料
                </li>
                <li className="text-[14px] text-hawkings-charcoal py-4 border-b border-hawkings-border font-light tracking-wide">
                  宇治エリアの抹茶使用
                </li>
              </ul>
              <span className="inline-block py-2 px-5 border border-hawkings-border text-[11px] font-medium tracking-wider uppercase text-hawkings-charcoal mr-4">
                展開中
              </span>
              <a
                href="https://takauji-matcha.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 text-hawkings-black text-[12px] font-medium tracking-extra-wide uppercase border-b border-hawkings-black pb-[2px] hover:opacity-50 transition-hawkings"
              >
                VISIT TAKAUJI
              </a>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <CareersSection />

        {/* About Section */}
        <section id="about" className="max-w-[1600px] mx-auto px-4 md:px-16 py-32 border-b border-hawkings-border">
          <div className="text-center max-w-[900px] mx-auto mb-24">
            <span className="text-[11px] font-medium uppercase tracking-extra-wide text-hawkings-gray mb-8 block">
              About
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 tracking-wide">会社情報</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-hawkings-border">
              <dt className="text-sm text-hawkings-gray font-light">会社名</dt>
              <dd className="col-span-2 text-sm text-hawkings-charcoal font-light">
                Hawkings株式会社（英字表記：Hawkings Inc. / 読み：ホーキンス）
              </dd>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-hawkings-border">
              <dt className="text-sm text-hawkings-gray font-light">代表取締役</dt>
              <dd className="col-span-2 text-sm text-hawkings-charcoal font-light">TAKAHASHI KEITA</dd>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-hawkings-border">
              <dt className="text-sm text-hawkings-gray font-light">設立</dt>
              <dd className="col-span-2 text-sm text-hawkings-charcoal font-light">2025年2月</dd>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-hawkings-border">
              <dt className="text-sm text-hawkings-gray font-light">資本金</dt>
              <dd className="col-span-2 text-sm text-hawkings-charcoal font-light">200万円</dd>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-hawkings-border">
              <dt className="text-sm text-hawkings-gray font-light">電話番号</dt>
              <dd className="col-span-2 text-sm text-hawkings-charcoal font-light">03-6412-7668</dd>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-hawkings-border">
              <dt className="text-sm text-hawkings-gray font-light">事務所所在地</dt>
              <dd className="col-span-2 text-sm text-hawkings-charcoal font-light">
                〒153-0043 東京都目黒区東山1-22-21
              </dd>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-hawkings-border">
              <dt className="text-sm text-hawkings-gray font-light">メールアドレス</dt>
              <dd className="col-span-2 text-sm text-hawkings-charcoal font-light">
                <a href="mailto:contact@hawkings-inc.com" className="hover:text-hawkings-black transition-hawkings">
                  contact@hawkings-inc.com
                </a>
              </dd>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-hawkings-border">
              <dt className="text-sm text-hawkings-gray font-light">事業内容</dt>
              <dd className="col-span-2 text-sm text-hawkings-charcoal font-light">
                AIトレーディングカード鑑定プラットフォーム「AXCI」の開発・運営<br />
                本格抹茶ブランド「TAKAUJI」の企画・販売
              </dd>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-[1600px] mx-auto px-4 md:px-16 py-32">
          <div className="text-center max-w-[900px] mx-auto mb-24">
            <span className="text-[11px] font-medium uppercase tracking-extra-wide text-hawkings-gray mb-8 block">
              Contact
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 tracking-wide">お問い合わせ</h2>
            <p className="text-hawkings-gray font-light leading-relaxed">
              ご質問・ご相談がございましたら、お気軽にお問い合わせください。
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
