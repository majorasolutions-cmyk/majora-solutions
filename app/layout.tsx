import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Majora Solutions | Elevating Global Customer Experiences',
  description: 'Premium trilingual remote operations for modern international businesses. Seamless customer support, appointment setting, and operational excellence with a luxury hospitality approach.',
  keywords: ['trilingual support', 'premium remote operations', 'customer experience', 'luxury business support', 'international operations', 'virtual assistant'],
  authors: [{ name: 'Majora Solutions' }],
  openGraph: {
    title: 'Majora Solutions | Elevating Global Customer Experiences',
    description: 'Premium trilingual remote operations for modern international businesses.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Majora Solutions | Elevating Global Customer Experiences',
    description: 'Premium trilingual remote operations for modern international businesses.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#C084A0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
