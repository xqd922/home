import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import React, { Suspense } from 'react'
import Nav from './components/nav'
import Footer from './footer'
import NewBlurLayer from './components/blur-layer'
import type { Viewport } from 'next'
import ClientLayoutWrapper from './components/ClientLayoutWrapper'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.xqd.pp.ua'),
  title: {
    default: 'Xqd - Personal Website',
    template: '%s | Xqd',
  },
  description: 'Computer Science student passionate about software development and web technologies.',
  openGraph: {
    title: 'Xqd - Personal Website',
    description: 'Computer Science student passionate about software development and web technologies.',
    url: 'https://blog.xqd.pp.ua',
    siteName: 'Xqd Personal Website',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Xqd - Personal Website',
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://blog.xqd.pp.ua',
  },
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'bg-white text-black dark:bg-[#111010] dark:text-white',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="relative mx-4 mb-28 mt-8 flex max-w-2xl flex-col antialiased sm:mx-auto md:flex-row md:max-w-4xl">
        <Suspense fallback={null}>
          <ClientLayoutWrapper>
            <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
              {children}
              <Nav />
              <Footer />
              <NewBlurLayer />
            </main>
          </ClientLayoutWrapper>
        </Suspense>
      </body>
    </html>
  )
}