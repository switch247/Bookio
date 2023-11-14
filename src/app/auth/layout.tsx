"use client"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import '../style.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Book.io',
//   description: '',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body >
        {children}
      </body>
    </html>
  )
}
