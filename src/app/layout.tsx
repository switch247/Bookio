import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import './style.css'

import { AuthProvider } from "./context/providers";
import ToasterContext from "./context/ToastContext"
import {isLoggedIn} from "@/lib/auth"

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Book.io',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // isLoggedIn()
  return (


    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icons8-book-64.png" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />

        <script src="https://code.jquery.com/jquery-3.4.1.min.js" defer></script>
        <script src="https://code.jquery.com/jquery-1.12.4.min.js" defer></script>
        {/* <!-- jquery  -->

      <!-- owl js--> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js" defer></script>

      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ToasterContext />
          {children}
        </AuthProvider>

      </body>
    </html>


  )
}
