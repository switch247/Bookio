import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
// import '@/app/globals.css'
// import '@/app/style.css'
import { AuthProvider } from "../context/providers";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body >
    </html >
  )
}
