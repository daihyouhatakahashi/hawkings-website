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
              私たちは、単なる技術開発ではなく、本物のプロダクトを生み出すことに全力を注いでいます
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="p-8 md:p-16 md:border-r border-hawkings-border hover:bg-hawkings-bg-alt transition-hawkings">
              <div className="text-xs font-medium uppercase tracking-extra-wide text-hawkings-gray mb-8">
                Vision
              </div>
              <h4 className="font-serif text-2xl font-normal mb-6 tracking-wide">ビジョン</h4>
              <p className="text-hawkings-gray font-light leading-relaxed">
                本物の価値を生み出し続ける
              </p>
            </div>

            <div className="p-8 md:p-16 md:border-r border-hawkings-border hover:bg-hawkings-bg-alt transition-hawkings">
              <div className="text-xs font-medium uppercase tracking-extra-wide text-hawkings-gray mb-8">
                Mission
              </div>
              <h4 className="font-serif text-2xl font-normal mb-6 tracking-wide">ミッション</h4>
              <p className="text-hawkings-gray font-light leading-relaxed">
                技術と誠実さで、信頼されるサービスを創る
              </p>
            </div>

            <div className="p-16 hover:bg-hawkings-bg-alt transition-hawkings">
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
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 tracking-wide">事業内容</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* AXCI */}
            <div className="p-8 md:p-16 md:border-r border-hawkings-border hover:bg-hawkings-bg-alt transition-hawkings">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-3xl font-light tracking-wide">AXCI</h3>
                  <span className="text-xs text-hawkings-gray">2025年11月末 ベータ版リリース予定</span>
                </div>
                <div className="text-sm text-hawkings-gray font-light mb-8">
                  AI Card Grading Platform
                </div>
              </div>
              <p className="text-hawkings-gray font-light leading-relaxed mb-12">
                ポケモンカードのコンディションをAIで精密鑑定し、その価値を可視化。誰でも簡単にカードの状態を判定でき、カードの魅力を引き立てるアプリ。
              </p>
              <a
                href="https://x.com/axci_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-extra-wide text-hawkings-gray hover:text-hawkings-black transition-hawkings inline-flex items-center gap-2"
              >
                準備中 
              </a>
            </div>

            {/* TAKAUJI */}
            <div className="p-16 hover:bg-hawkings-bg-alt transition-hawkings">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-3xl font-light tracking-wide">TAKAUJI</h3>
                  <span className="text-xs text-hawkings-gray">展開中</span>
                </div>
                <div className="text-sm text-hawkings-gray font-light mb-8">
                  Premium Matcha Brand
                </div>
              </div>
              <p className="text-hawkings-gray font-light leading-relaxed mb-12">
                厳選された宇治抹茶と国産原材料のみを使用し、添加物を一切加えない本格抹茶ラテ。世界中で愛される本物の抹茶体験をお届けします。
              </p>
              <a
                href="https://takauji-matcha.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-extra-wide text-hawkings-gray hover:text-hawkings-black transition-hawkings inline-flex items-center gap-2"
              >
                Learn More →
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
                Hawkings 株式会社（英字表記：Hawkings Inc. / 読み：ホーキンス）
              </dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-hawkings-border">
              <dt className="text-sm text-hawkings-gray font-light">設立</dt>
              <dd className="col-span-2 text-sm text-hawkings-charcoal font-light">
                2025年2月14日
              </dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-hawkings-border">
              <dt className="text-sm text-hawkings-gray font-light">代表取締役</dt>
              <dd className="col-span-2 text-sm text-hawkings-charcoal font-light">
                高橋 慧多
              </dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-hawkings-border">
              <dt className="text-sm text-hawkings-gray font-light">所在地</dt>
              <dd className="col-span-2 text-sm text-hawkings-charcoal font-light">
                〒153-0043 東京都目黒区東山1-22-21
              </dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-hawkings-border">
              <dt className="text-sm text-hawkings-gray font-light">電話番号</dt>
              <dd className="col-span-2 text-sm text-hawkings-charcoal font-light">
                03-6412-7668
              </dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 py-6">
              <dt className="text-sm text-hawkings-gray font-light">メール</dt>
              <dd className="col-span-2 text-sm text-hawkings-charcoal font-light">
                global@hawkings-inc.com
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
              サービスに関するご質問、取材のご依頼、協業のご相談など、お気軽にお問い合わせください
            </p>
          </div>

          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  )
}
