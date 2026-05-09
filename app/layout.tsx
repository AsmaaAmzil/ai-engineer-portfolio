import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Asmaa Amzil | AI Engineer & Computational Researcher',
  description: 'AI Engineer specializing in Multi-Agent Systems, Deep Learning, Computational Modeling, and Intelligent Systems. Building interpretable, policy-relevant AI solutions.',
  keywords: ['AI Engineer', 'Machine Learning', 'Multi-Agent Systems', 'Deep Learning', 'Computational Modeling', 'NLP', 'Reinforcement Learning'],
  authors: [{ name: 'Asmaa Amzil' }],
  creator: 'Asmaa Amzil',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Asmaa Amzil | AI Engineer & Computational Researcher',
    description: 'AI Engineer specializing in Multi-Agent Systems, Deep Learning, and Computational Modeling.',
    siteName: 'Asmaa Amzil Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asmaa Amzil | AI Engineer & Computational Researcher',
    description: 'AI Engineer specializing in Multi-Agent Systems, Deep Learning, and Computational Modeling.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
