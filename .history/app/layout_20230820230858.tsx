import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Кулямпа',
  description: 'Йовбак Ніка Ігорівна жосткий SEO 18082023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="2mgyOlwwhb-FOBIHL0X8Rst2spNoz82k-JcZP-eiwag" />
        <link rel="icon" type="image/x-icon" href="/favicon-16x16.png"></link>
      </head>
      <body className={inter.className}>
        <Header />
       
        <main className="flex min-h-screen flex-col items-center justify-between sm:p-2 md:p-5 lg:p-24 xl:p-24 2xl:p-24 ">
            {children}
          </main>
        <Footer/>
        </body>
        
    </html>
  )
}
