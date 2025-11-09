import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Hawkings Inc. - Burn. Build. Leave a legacy.',
  description: 'Hawkings Inc. - 究極のプロダクト開発に全てを注ぐ。AIトレーディングカード鑑定プラットフォームAXCIと本格抹茶ブランドTAKAUJIを展開。',
  keywords: 'AXCI, TAKAUJI, トレーディングカード, AI鑑定, 抹茶, Hawkings, ポケモンカード, AI grading, 宇治抹茶',
  openGraph: {
    title: 'Hawkings Inc. - Burn. Build. Leave a legacy.',
    description: '究極のプロダクト開発に全てを注ぐ。AIトレーディングカード鑑定プラットフォームAXCIと本格抹茶ブランドTAKAUJIを展開。',
    type: 'website',
    url: 'https://hawkings-inc.com/',
    images: [
      {
        url: 'https://hawkings-inc.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hawkings Inc.',
      },
    ],
    siteName: 'Hawkings Inc.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkings Inc. - Burn. Build. Leave a legacy.',
    description: '究極のプロダクト開発に全てを注ぐ',
    images: ['https://hawkings-inc.com/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
