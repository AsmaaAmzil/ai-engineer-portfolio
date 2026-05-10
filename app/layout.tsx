import type { Metadata, Viewport } from 'next'
import { Poppins, JetBrains_Mono, Dancing_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-script'
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
    <html lang="en" className="bg-background">
      <body className={`${poppins.variable} ${dancingScript.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
