'use client'

import { useState } from 'react'
import JobCard from './JobCard'

export default function CareersSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="careers" className="max-w-[1600px] mx-auto px-4 md:px-16 py-32 border-b border-hawkings-border">
      <div className="text-center max-w-[900px] mx-auto mb-24">
        <span className="text-[11px] font-medium uppercase tracking-extra-wide text-hawkings-gray mb-8 block">
          Careers
        </span>
        <h2 className="font-serif text-5xl font-light mb-8 tracking-wide">採用情報</h2>
        <p className="text-hawkings-gray font-light leading-relaxed">
          職種にしばられず、あなたの"やりたい"をカタチに。<br />
          自律的に動けて、自分なりの理想を語れる仲間を募集しています。
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-8 px-8 md:px-14 py-[1.125rem] bg-hawkings-black text-white text-[11px] font-medium uppercase tracking-extra-wide border border-hawkings-black hover:bg-white hover:text-hawkings-black transition-hawkings"
        >
          {isExpanded ? '閉じる' : '詳細を見る'}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-600 ${
          isExpanded ? 'max-h-[20000px] opacity-100 mt-24' : 'max-h-0 opacity-0'
        }`}
      >
        {/* 求める人物像 */}
        <div className="mb-32">
          <h3 className="font-serif text-2xl md:text-4xl font-normal mb-16 text-center tracking-wide">
            求める人物像
          </h3>
          <div className="max-w-[1000px] mx-auto">
            <div className="p-8 md:p-14 border border-hawkings-border">
              <h4 className="text-xs font-medium uppercase tracking-wide text-hawkings-gray mb-10">
                歓迎するスキルセット・スタンス
              </h4>
              <div className="space-y-10">
                <div className="pb-10 border-b border-hawkings-border">
                  <h5 className="text-base font-medium mb-4">T字人材</h5>
                  <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
                    職種の領域を越えて、横断的に活躍できる方（例: PM × デザイン、デザイン × エンジニアリング）
                  </p>
                </div>
                <div className="pb-10 border-b border-hawkings-border">
                  <h5 className="text-base font-medium mb-4">コア行動</h5>
                  <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
                    「ゼロイチでの実装 → 高速な実験 → 計測 → 改善」のサイクルを自律的に回し、得た知見をチームに共有できる方
                  </p>
                </div>
                <div>
                  <h5 className="text-base font-medium mb-4">カード知識</h5>
                  <p className="text-[15px] text-hawkings-gray leading-relaxed font-light">
                    必須ではありません。ポケモンカードへの興味と、積極的に知識を吸収する意欲があれば大歓迎です
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 働き方・環境 */}
        <div className="mb-32">
          <h3 className="font-serif text-2xl md:text-4xl font-normal mb-16 text-center tracking-wide">
            働き方・環境
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              { title: '稼働時間', content: '週10時間〜40時間で柔軟に調整可能' },
              { title: '勤務形態', content: 'フルリモート可', note: '※最初の3ヶ月程度は対面でのコミュニケーションを重視' },
              { title: '契約形態', content: '業務委託・副業での参画を歓迎' },
              { title: '報酬', content: 'グローバルスタンダードを意識し、実績と貢献に応じて柔軟にご提案' },
              { title: '開発環境', content: 'GPUなど、最高のパフォーマンスを発揮できる機材を迅速に提供' },
              { title: 'R&D投資', content: '事業の生命線である先端技術に対し、売上の約50%を目安に継続投資' },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-14 border border-hawkings-border ${
                  index % 2 === 0 ? 'md:border-r-0' : ''
                } ${index >= 2 ? 'border-t-0' : ''}`}
              >
                <h4 className="text-xs font-medium uppercase tracking-wide text-hawkings-gray mb-6">
                  {item.title}
                </h4>
                <p className="text-base text-hawkings-charcoal leading-relaxed font-light">
                  {item.content}
                  {item.note && (
                    <>
                      <br />
                      <span className="text-sm text-hawkings-light-gray">{item.note}</span>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 募集職種 */}
        <div className="mb-32">
          <h3 className="font-serif text-2xl md:text-4xl font-normal mb-16 text-center tracking-wide">
            募集職種
          </h3>
          <div className="space-y-8">
            <JobCard
              id="job-pm"
              title="プロダクトマネージャー (PM / PdM)"
              roles={[
                '事業目標をプロダクトのKPI（例: CVR, 出品完了率）に落とし込み、達成を主導',
                '機能要件の定義、開発優先順位の決定、スプリントの運用',
                'ユーザーインタビューやデータ分析に基づき、プロダクトの改善サイクルを推進',
              ]}
              requiredSkills={[
                'Web/アプリの立ち上げから運用までの経験',
                '定量的データ（SQL, ダッシュボード）と定性的情報（ユーザーインタビュー）を行き来して意思決定ができる方',
                'デザイナー、エンジニアと共通言語で議論し、プロジェクトを推進できる方',
              ]}
              welcomeSkills={[
                'マーケットプレイス、決済、KYC、匿名配送に関する知見',
                'SNSやコミュニティ機能のグロース経験',
              ]}
            />
            
            <JobCard
              id="job-designer"
              title="UI/UX デザイナー"
              roles={[
                '事業要件を理解し、ユーザーフローや情報構造を設計',
                'アルバム、マケプレ、チャットなど、各機能の使いやすく魅力的なUIデザイン',
                '一貫性のあるデザインシステム（コンポーネント）の設計・運用',
              ]}
              requiredSkills={[
                'Figmaを用いたWebまたはアプリのデザイン経験',
                '「ユーザーを迷わせない導線設計」や「情報の優先順位付け」が得意な方',
                'エンジニアと連携し、実装の実現可能性を考慮したデザインができる方',
              ]}
              welcomeSkills={[
                'デザインシステムの構築・運用経験',
                'コレクターズアイテムの魅力を引き出す「見せ方」（比較・拡大表示など）に関する知見',
              ]}
            />
            
            <JobCard
              id="job-backend"
              title="バックエンド / DBエンジニア"
              subtitle="（セキュリティ・マケプレ担当）"
              roles={[
                '出品から購入、決済（エスクロー）、匿名配送までの一連のシステム構築',
                '在庫・注文・ユーザー情報の整合性を担保する、堅牢なデータベースの設計・運用（ACID原則の遵守）',
                '不正アクセスや二重決済を防止するセキュリティ設計と、監査ログの整備',
              ]}
              requiredSkills={[
                'Webサービスのサーバーサイド開発経験（TypeScript, Go）',
                '「壊れないDB設計」が得意な方（正規化, ロック戦略, スキーマ移行など）',
                'セキュリティ（認証・認可・決済）を考えられる方',
                'インフラの運用や耐障害性、可用性に対する対処',
              ]}
              welcomeSkills={[
                '決済連携（Stripe, Adyen）の経験',
                '物流、匿名配送、本人確認（KYC）に関する知見',
              ]}
            />
            
            <JobCard
              id="job-frontend"
              title="フロントエンド / フルスタックエンジニア"
              roles={[
                '出品ページ、商品詳細、カートなど、ユーザーが直接触れる画面の実装',
                '検品・在庫・注文状況を可視化する、社内向け管理画面の構築',
                '画像や動画の表示を最適化し、快適なユーザー体験を実現（CDN活用）',
              ]}
              requiredSkills={[
                'Webフロントエンド開発が得意な方（React, Next.jsなど）',
                'UIを迅速に実装し、データ（CVRなど）に基づいて改善サイクルを回せる方',
                'API連携や認証など、バックエンドに関する基本的な知識',
              ]}
              welcomeSkills={[
                '画像・動画アップロードやCDN最適化の経験',
                'アクセス解析ツール（GA4, PostHog）を用いた改善経験',
              ]}
              mandatorySkills={[
                'ユーザー数「数万人」規模のサービスの開発・運用経験がある',
                'GCP、gRPC、または WebSocket のいずれかの実務経験がある',
              ]}
            />
            
            <JobCard
              id="job-social"
              title="ソーシャル機能エンジニア"
              roles={[
                'ユーザー同士がアルバムを公開・共有し、フォローできる機能の開発',
                'DM・チャット機能（通報・ブロック等のセーフティ機能を含む）の実装',
                'リアルタイム更新（既読、オンライン表示、プッシュ通知など）の実装',
              ]}
              requiredSkills={[
                'SNSやコミュニティ機能の開発経験',
                'リアルタイム通信（WebSocket, Firebase, Supabase Realtimeなど）の利用経験',
                '「楽しく、かつ安全に」使える体験の実現にこだわれる方',
              ]}
              welcomeSkills={[
                '画像自動モデレーションや不正検知に関する知識',
                '発見タブや通知など、ユーザーエンゲージメントを高めるソーシャル機能の設計経験',
              ]}
            />
          </div>
        </div>

        {/* 技術スタック */}
        <div className="mb-24">
          <h3 className="font-serif text-2xl md:text-4xl font-normal mb-16 text-center tracking-wide">
            技術スタック
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              { title: 'フロントエンド', content: 'React Native, Expo, gRPC, WebSocket, Supabase' },
              { title: 'バックエンド', content: 'Go, Python, TypeScript, PostgreSQL, Supabase (Auth, Storage, Realtime等)' },
              { title: 'インフラ / MLOps', content: 'GCP (Cloud Run, BigQuery, Vertex AI, GKE), OpenTelemetry, Sentry' },
              { title: 'Data / ML', content: 'Vertex AI, MMEngine' },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-14 border border-hawkings-border ${
                  index % 2 === 0 ? 'md:border-r-0' : ''
                } ${index >= 2 ? 'border-t-0' : ''}`}
              >
                <h4 className="text-xs font-medium uppercase tracking-wide text-hawkings-gray mb-6">
                  {item.title}
                </h4>
                <p className="text-[15px] text-hawkings-charcoal leading-relaxed font-light">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 応募 */}
        <div className="text-center">
          <p className="text-base text-hawkings-gray mb-10 leading-relaxed font-light">
            まずはお気軽にご相談ください
          </p>
          <a
            href="#contact"
            className="inline-block px-8 md:px-14 py-[1.125rem] bg-white text-hawkings-black text-[11px] font-medium uppercase tracking-extra-wide border border-hawkings-black hover:bg-hawkings-black hover:text-white transition-hawkings"
          >
            応募する
          </a>
        </div>
      </div>
    </section>
  )
}
