import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  title: 'Resume - Your Name',
  description: 'Personal resume and professional background',
  openGraph: {
    title: 'Resume - Your Name',
    description: 'Personal resume and professional background',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="antialiased bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}